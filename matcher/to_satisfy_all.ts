// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toSatisfyAll` when you want to use a custom matcher by supplying a
 * predicate function that returns a `boolean` for all values in an `array`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toSatisfyAll,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toSatisfyAll,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when all values in array pass given predicate", () => {
 *   const isOdd = (el: unknown) => typeof el === "number" && el % 2 === 1;
 *   expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
 *   expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
 * });
 * ```
 */
function toSatisfyAll<T>(
  actual: T[],
  predicate: (value: T) => boolean,
): MatchResult {
  return {
    pass: actual.every(predicate),
    expected: `satisfy predicate for all values:`,
  };
}

export { toSatisfyAll };
