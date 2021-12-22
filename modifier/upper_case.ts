// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { magenta } from "../deps.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

/** Use `.upperCase` to convert `string` actual to lower case.
 * ```ts
 * import {
 *   defineExpect,
 *   test,
 *   toBe,
 *   upperCase,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     upperCase,
 *   },
 * });
 *
 * test("passes when upper cased value to be", () => {
 *   expect("").upperCase.toBe("");
 *   expect("Test").upperCase.toBe("TEST");
 * });
 * ```
 */
const upperCase: PreModifier<string, PreModifierResult<string>> = {
  type: "pre",
  fn: (actual) => ({
    actual: actual.toUpperCase(),
    reserveActualHint: (actualHint) =>
      `${actualHint} ${magenta("[toUpperCase]")}`,
  }),
};

export { upperCase };
