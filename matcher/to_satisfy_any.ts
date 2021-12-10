// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toSatisfyAny` when you want to use a custom matcher by supplying a
 * predicate function that returns `true` for any matching value in an `array`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toSatisfyAny,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toSatisfyAny,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when any value in array pass given predicate", () => {
 *   const isOdd = (el: unknown) => typeof el === "number" && el % 2 === 1;
 *   expect([2, 3, 6, 8]).toSatisfyAny(isOdd);
 *   expect([2, 4, 8, 12]).not.toSatisfyAny(isOdd);
 * });
 * ```
 */
function toSatisfyAny<T>(
  actual: T[],
  predicate: (value: T) => boolean,
): MatchResult {
  return {
    pass: actual.some(predicate),
    expected: "Expected to satisfy predicate for any values:",
  };
}

export { toSatisfyAny };
