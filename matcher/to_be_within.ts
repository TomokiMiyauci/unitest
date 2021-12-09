// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function predict(actual: number, start: number, end: number): boolean {
  return start <= actual && actual < end;
}

/** Use `.toBeWithin` when checking if a `number` is in between the given bounds of:
 * start (inclusive) and end (exclusive)
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeWithin,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeWithin,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when number is within given bounds", () => {
 *   expect(1).toBeWithin(1, 3);
 *   expect(2).toBeWithin(1, 3);
 *   expect(3).not.toBeWithin(1, 3);
 * });
 * ```
 */
function toBeWithin(actual: number, start: number, end: number): MatchResult {
  return {
    pass: predict(actual, start, end),
    expected: `${start} <= Actual < ${end}`,
  };
}

export { predict, toBeWithin };
