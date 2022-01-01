// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Plugin } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";
import { createGenerator } from "https://esm.sh/@unocss/core";
import { presetTypography } from "https://cdn.skypack.dev/unocss-preset-typography?dts";
import presetWind from "https://esm.sh/@unocss/preset-wind";
import presetIcons from "https://cdn.skypack.dev/@unocss/preset-icons";

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
              background: "rgba(229, 231, 235, 0.4)",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p > code": {
              "background-color": "rgb(243, 244, 246)",
              "border-radius": "0.25rem",
              "padding-left": "0.125rem",
              "padding-right": "0.125rem",
            },
          },
        }),
        presetIcons({
          extraProperties: {
            "display": "inline-block",
            "vertical-align": "middle",
          },
          collections: {
            mdi: () =>
              import("https://cdn.esm.sh/@iconify-json/mdi@1.0.12/icons.json", {
                assert: { type: "json" },
              }).then((i) => i.default),
          },
        }),
      ],
    });

    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      console.log(bundleMode);
      const { specifier } = module;
      const url = specifier.replace(/\.(j|t)sx$/i, "") + ".unocss.css";

      const { css } = await gen.generate(code);
      const cssModule = await aleph.addModule(url, css, false);

      return {
        code: `import "${
          aleph.resolveImport(cssModule, specifier, bundleMode, true)
        }";${code}`,
        extraDeps: [{ specifier: url, virtual: true }],
      };
    });
  },
};
