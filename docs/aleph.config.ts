import markdown from "https://deno.land/x/aleph/plugins/markdown.ts";
import type { Config } from "aleph/types";
import windicss from "./plugin.ts";

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
