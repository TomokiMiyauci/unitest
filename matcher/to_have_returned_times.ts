// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

/** predict for `toHaveReturnedTimes` */
function predict(
  mockResults: readonly MockResult[],
  expected: number,
): boolean {
  const count = mockResults.reduce((acc, { type }) => {
    if (type === "return") {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return count === expected;
}

/** Use `.toHaveReturnedTimes` to ensure that a mock object returned successfully an
 * exact number of times
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object returned successfully times", () => {
 *   const mockObject = fn((a: number, b: number) => a + b);
 *   mockObject(1, 2);
 *   mockObject(3, 4);
 *
 *   expect(mockObject).toHaveReturnedTimes(2);
 * });
 * ```
 */
function toHaveReturnedTimes(
  { mock }: MockObject,
  expected: number,
): MatchResult {
  // TODO:(miyauci) improve assertion message
  return {
    pass: predict(mock.results, expected),
    expected,
  };
}

export { predict, toHaveReturnedTimes };
