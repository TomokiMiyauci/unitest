// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PreModifier } from "./types.ts";

/** Use `.trim` to removes the leading and trailing white space and line terminator
 * characters from a `actual`.
 * ```ts
 * import {
 *   defineExpect,
 *   test,
 *   toBe,
 *   trim,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     trim,
 *   },
 * });
 *
 * test("passes when trimmed string to be", async () => {
 *   await expect("  hello world  ").trim.toBe("hello world");
 * });
 * ```
 */
const trim: PreModifier<string, string> = {
  type: "pre",
  fn: (actual) => {
    return {
      actual: actual.trim(),
    };
  },
};

export { trim };
