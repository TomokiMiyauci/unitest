// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import markdown from "./plugins/markdown.ts";
import type { Config } from "aleph/types";
import unocss from "./plugins/unocss.ts";

export default <Config> {
  plugins: [
    unocss,
    markdown({
      highlight: {
        provider: "highlight.js",
        theme: "rainbow",
      },
      toc: [2, 3],
    }),
  ],
  css: {
    postcss: {
      plugins: ["postcss-nested", "autoprefixer"],
    },
  },
};
