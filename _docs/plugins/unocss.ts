// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Plugin } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";
import { createGenerator } from "https://esm.sh/@unocss/core";
import { presetTypography } from "https://cdn.skypack.dev/unocss-preset-typography?dts";
import presetWind from "https://esm.sh/@unocss/preset-wind";

export default <Plugin> {
  name: "unocss",
  setup: (aleph) => {
    const gen = createGenerator({
      presets: [
        presetWind(),
        presetTypography({
          cssExtend: {
            "pre": {
              padding: "0 0",
            },
            "pre > code": {
              background: "#f9fafb",
            },
          },
        }),
      ],
    });

    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      console.log(bundleMode);
      const { specifier } = module;
      const url = specifier.replace(/\.(j|t)sx$/i, "") + ".unocss.css";

      const { css } = await gen.generate(code);
      const cssModule = await aleph.addModule(url, css);

      return {
        code: `import "${
          aleph.resolveImport(cssModule, specifier, bundleMode, true)
        }";${code}`,
        extraDeps: [{ specifier: url, virtual: true }],
      };
    });
  },
};
