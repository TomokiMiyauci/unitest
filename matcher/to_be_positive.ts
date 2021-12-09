// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isPositiveNumber } from "../deps.ts";

/** Use `.toBePositive` when checking if a value is a positive `number`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBePositive,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBePositive,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a positive number", () => {
 *   expect(1).toBePositive();
 *   expect(Infinity).not.toBePositive();
 *   expect(-1).not.toBePositive();
 *   expect(NaN).not.toBePositive();
 * });
 * ```
 */
function toBePositive(actual: number): MatchResult {
  return {
    pass: isPositiveNumber(actual),
    expected: "positive number",
  };
}

export { toBePositive };
