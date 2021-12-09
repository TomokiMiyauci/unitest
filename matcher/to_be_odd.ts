// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isOdd } from "../deps.ts";

/** Use `.toBeOdd` when checking if a value is an odd `number`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeOdd,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeOdd,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an odd number", () => {
 *   expect(1).toBeOdd();
 *   expect(2).not.toBeOdd();
 *   expect(NaN).not.toBeOdd();
 * });
 * ```
 */
function toBeOdd(actual: number): MatchResult {
  return {
    pass: isOdd(actual),
    expected: "odd",
  };
}

export { toBeOdd };
