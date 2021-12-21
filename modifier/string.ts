// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { magenta } from "../deps.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

/** Use `.string` to convert any `actual` to `string`. Internally, the `String`
 * constructor is used.
 * ```ts
 * import {
 *   defineExpect,
 *   string,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     string,
 *   },
 * });
 *
 * test("passes when stringified value to be", () => {
 *   expect(null).string.toBe("null");
 * });
 * ```
 */
const string: PreModifier<unknown, PreModifierResult<string>> = {
  type: "pre",
  fn: (actual) => ({
    actual: String(actual),
    reserveActualHint: (actualHint) => `${actualHint} ${magenta("[toString]")}`,
  }),
};

export { string };
