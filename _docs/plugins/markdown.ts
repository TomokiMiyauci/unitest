// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type {
  Aleph,
  LoadInput,
  LoadOutput,
  Plugin,
  ResolveResult,
} from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";

import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";
import marked from "https://cdn.skypack.dev/marked@3.0.4?dts";
import hljs from "https://esm.sh/highlight.js@10.7.1?bundle";
import unescape from "https://esm.sh/unescape@1.0.1?bundle";
import util from "https://deno.land/x/aleph@v0.3.0-beta.19/shared/util.ts";

declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

const test = /\.(md|markdown)$/i;
const reCodeTag = /<code class="language\-([^"]+)">([\s\S]+?)<\/code>/g;
const escape = /[^\w]+/g;
export const markdownResolver = (specifier: string): ResolveResult => {
  let pagePath = util.trimPrefix(
    specifier.replace(/\.(md|markdown)$/i, ""),
    "/pages",
  );
  const isIndex = pagePath.endsWith("/index");
  if (isIndex) {
    pagePath = util.trimSuffix(pagePath, "/index");
    if (pagePath === "") {
      pagePath = "/";
    }
  }
  return { asPage: { path: pagePath, isIndex } };
};

export const markdownLoader = async (
  { specifier }: LoadInput,
  aleph: Aleph,
  { highlight, toc }: Options = {},
): Promise<LoadOutput> => {
  const { framework } = aleph.config;
  const { content } = await aleph.fetchModule(specifier);
  const source = new TextDecoder().decode(content);
  const { __content, ...meta } = safeLoadFront(
    source,
  );
  const props = {
    id: util.isString(meta.id) ? meta.id : undefined,
    className: util.isString(meta.className)
      ? meta.className.trim()
      : undefined,
    style: util.isPlainObject(meta.style)
      ? Object.entries(meta.style).reduce((prev, [key, value]) => {
        prev[key.replaceAll(/\-[a-z]/g, (m) => m.slice(1).toUpperCase())] =
          value;
        return prev;
      }, {} as Record<string, any>)
      : undefined,
  };

  marked.use({
    renderer: {
      heading(text, level) {
        const escapedText = text.toLowerCase().replaceAll(escape, "-");

        return `
                <h${level} id=${escapedText}>
                  <a href="#${escapedText}">
                    <span class="header-link"></span>
                  </a>${text}</h${level}>`;
      },
    },
  });

  let html = marked.parse(__content);
  if (highlight) {
    html = html.replace(reCodeTag, (_, language, code) => {
      const h = hljs.highlight(unescape(code), { language }).value;
      return `<code class="language-${language} hljs">${h}</code>`;
    });
  }
  const tokens = marked.lexer(source);
  const _toc = new Set(toc);
  const tocs = tokens.reduce((acc, cur) => {
    if (cur.type === "heading" && _toc.has(cur.depth as Depth)) {
      return acc.concat({
        depth: cur.depth,
        title: cur.text,
        id: globalThis.crypto.randomUUID(),
        escapedTitle: cur.text.toLowerCase().replaceAll(escape, "-"),
      });
    }
    return acc;
  }, [] as Toc[]);

  const code = [
    `import { createElement } from 'https://esm.sh/react'`,
    `import HTMLPage from 'https://deno.land/x/aleph/framework/react/components/HTMLPage.ts'`,
    highlight &&
    `import 'https://esm.sh/highlight.js@10.7.1/styles/${
      highlight.theme || "default"
    }.css'`,
    `export default function MarkdownPage(props) {`,
    `  return createElement(HTMLPage, {`,
    `    ...${JSON.stringify(props)},`,
    `    ...props,`,
    `    html: ${JSON.stringify(html)}`,
    `  })`,
    `}`,
    `MarkdownPage.meta = ${JSON.stringify(meta)}`,
    toc ? `MarkdownPage.toc = ${JSON.stringify(tocs)}` : "",
  ];

  if (framework === "react") {
    return {
      code: code.filter(Boolean).join("\n"),
    };
  }

  throw new Error(`markdown-loader: don't support framework '${framework}'`);
};

type Depth = 1 | 2 | 3 | 4 | 5 | 6;

export type Options = {
  highlight?: {
    provider: "highlight.js";
    theme?: string;
  };
  toc?: Depth[];
};

export default (options?: Options): Plugin => {
  return {
    name: "markdown-loader",
    setup: (aleph) => {
      aleph.onResolve(test, markdownResolver);
      aleph.onLoad(test, (input) => markdownLoader(input, aleph, options));
    },
  };
};

type Markdown = {
  toc: Toc[];
};

type Toc = {
  depth: number;
  title: string;
  escapedTitle: string;
  id: string;
};

export type { Markdown, Toc };
