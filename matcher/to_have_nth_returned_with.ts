// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import type { MockResult } from "../mock/mock.ts";
import type { MockObject } from "../mock/fn.ts";
import { isUndefined } from "../deps.ts";
import { take } from "./utils.ts";
import { equal } from "../helper/equal.ts";

/** predict for `toHaveNthReturnedWith` */
function predict(
  mockResults: readonly MockResult[],
  nthCall: number,
  expected: unknown,
): boolean {
  const mockResult = take(mockResults, nthCall - 1);

  if (isUndefined(mockResult)) {
    return false;
  }

  return mockResult.type === "return" && equal(mockResult.value, expected);
}

/** Use `.toHaveNthReturnedWith` to test the specific value that a mock object
 * returned for the nth call
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object of last returned with", () => {
 *   const mockObject = fn((a: number, b: number) => a + b);
 *   mockObject(1, 2);
 *   mockObject(3, 4);
 *   expect(mockObject).toHaveNthReturnedWith(1, 3);
 *   expect(mockObject).toHaveNthReturnedWith(2, 7);
 * });
 * ```
 */
function toHaveNthReturnedWith(
  { mock }: MockObject,
  nthCall: number,
  expected: unknown,
): MatchResult {
  return {
    actualHint: `Actual ${nthCall}th returned with:`,
    resultActual: take(mock.results, nthCall - 1)?.value,
    pass: predict(mock.results, nthCall, expected),
    expected,
  };
}

export { predict, toHaveNthReturnedWith };
