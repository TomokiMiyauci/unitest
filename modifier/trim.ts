// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { magenta } from "../deps.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

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
 * test("passes when trimmed string to be", () => {
 *   expect("  hello world  ").trim.toBe("hello world");
 * });
 * ```
 */
const trim: PreModifier<string, PreModifierResult<string>> = {
  type: "pre",
  fn: (actual) => {
    return {
      actual: actual.trim(),
      reserveActualHint: (actualHint) =>
        `${actualHint} ${magenta("[trimmed]")}`,
    };
  },
};

export { trim };
