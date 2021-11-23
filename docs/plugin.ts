import Processor from "https://esm.sh/windicss@3.1.7";
import type { Plugin } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";

export default <Plugin> {
  name: "windicss",
  setup: (aleph) => {
    const windi = new Processor();

    // inject preflight
    aleph.onTransform(/app.tsx/, async ({ module, code, bundleMode }) => {
      const { specifier } = module;
      const url = specifier.replace(/\.(j|t)sx$/i, "") + ".tailwind.css";
      const StyleSheet = windi.preflight();
      const preflight = StyleSheet.build(true);

      const cssModule = await aleph.addModule(url, preflight, false);

      return {
        code: `import "${
          aleph.resolveImport(cssModule, specifier, bundleMode, true)
        }";${code}`,
        extraDeps: [{ specifier: url, virtual: true }],
      };
    });

    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      const { specifier, jsxStaticClassNames } = module;
      if (jsxStaticClassNames?.length) {
        const url = specifier.replace(/\.(j|t)sx$/i, "") + ".tailwind.css";
        const interpretedSheet =
          windi.interpret(jsxStaticClassNames.join(" ")).styleSheet;
        const minify = aleph.mode === "production";
        const css = interpretedSheet.build(minify);
        const cssModule = await aleph.addModule(url, css, true);

        return {
          // import tailwind css
          code: `import "${
            aleph.resolveImport(cssModule, specifier, bundleMode, true)
          }";${code}`,
          // support SSR
          extraDeps: [{ specifier: url, virtual: true }],
        };
      }
    });
  },
};
