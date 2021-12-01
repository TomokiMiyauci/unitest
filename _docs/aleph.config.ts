// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import markdown from "https://deno.land/x/aleph/plugins/markdown.ts";
import type { Config } from "aleph/types";
import windicss from "./plugins/windicss.ts";

export default <Config> {
  plugins: [
    windicss,
    markdown({
      highlight: {
        provider: "highlight.js",
        theme: "github",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: ["postcss-nested", "autoprefixer"],
    },
  },
};
