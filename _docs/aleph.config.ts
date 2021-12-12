// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import markdown from "https://deno.land/x/aleph/plugins/markdown.ts";
import type { Config } from "aleph/types";
import unocss from "./plugins/unocss.ts";

export default <Config> {
  plugins: [
    unocss,
    markdown({
      highlight: {
        provider: "highlight.js",
        theme: "nord",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: ["postcss-nested", "autoprefixer"],
    },
  },
};
