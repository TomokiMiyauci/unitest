// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { magenta } from "../deps.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

/** Use `.lowerCase` to convert `string` `actual` to lower case.
 * ```ts
 * import {
 *   defineExpect,
 *   lowerCase,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     lowerCase,
 *   },
 * });
 *
 * test("passes when lower cased value to be", () => {
 *   expect("").lowerCase.toBe("");
 *   expect("Test").lowerCase.toBe("test");
 * });
 * ```
 */
const lowerCase: PreModifier<string, PreModifierResult<string>> = {
  type: "pre",
  fn: (actual) => ({
    actual: actual.toLowerCase(),
    reserveActualHint: (actualHint) =>
      `${actualHint} ${magenta("[toLowerCase]")}`,
  }),
};

export { lowerCase };
