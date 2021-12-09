// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isEven } from "../deps.ts";

/** Use `.toBeEven` when checking if a value is an even `Number`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeEven,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeEven,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an even number", () => {
 *   expect(2).toBeEven();
 *   expect(1).not.toBeEven();
 *   expect(NaN).not.toBeEven();
 * });
 * ```
 */
function toBeEven(actual: number): MatchResult {
  return {
    pass: isEven(actual),
    expected: "even",
  };
}

export { toBeEven };
