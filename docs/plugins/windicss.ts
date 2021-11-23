import Processor from "https://esm.sh/windicss@3.1.7";
import type { Plugin } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";

export default <Plugin> {
  name: "windicss",
  setup: (aleph) => {
    const windi = new Processor();

    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      const { specifier, jsxStaticClassNames } = module;

      const isApp = /\/app.tsx/.test(specifier);

      const _jsxStaticClassNames = isApp
        ? jsxStaticClassNames ?? [""]
        : jsxStaticClassNames;

      if (!_jsxStaticClassNames || !_jsxStaticClassNames.length) return;

      const url = specifier.replace(/\.(j|t)sx$/i, "") + ".tailwind.css";
      const interpretedSheet =
        windi.interpret(_jsxStaticClassNames.join(" ")).styleSheet;
      const minify = aleph.mode === "production";

      if (isApp) {
        interpretedSheet.extend(windi.preflight());
      }
      const css = interpretedSheet.build(minify);
      const cssModule = await aleph.addModule(url, css, !minify);

      return {
        code: `import "${
          aleph.resolveImport(cssModule, specifier, bundleMode, true)
        }";${code}`,
        extraDeps: [{ specifier: url, virtual: true }],
      };
    });
  },
};
