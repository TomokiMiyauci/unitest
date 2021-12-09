// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isNegativeNumber } from "../deps.ts";

/** Use `.toBeNegative` when checking if a value is a negative `number`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeNegative,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeNegative,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a negative number", () => {
 *   expect(-1).toBeNegative();
 *   expect(-Infinity).not.toBeNegative();
 *   expect(1).not.toBeNegative();
 *   expect(NaN).not.toBeNegative();
 * });
 * ```
 */
function toBeNegative(actual: number): MatchResult {
  return {
    pass: isNegativeNumber(actual),
    expected: "negative number",
  };
}

export { toBeNegative };
