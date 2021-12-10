// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

/** predict for `toHaveReturnedWith` */
function predict(
  mockResults: readonly MockResult[],
  expected: unknown,
): boolean {
  const result = mockResults.some(({ type, value }) =>
    type === "return" && equal(value, expected)
  );

  return result;
}

/** Use `.toHaveReturnedWith` to ensure that a mock object returned a specific
 * value
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object returned specific value", () => {
 *   const mockObject = fn((a: number, b: number) => a + b);
 *   mockObject(1, 2);
 *   mockObject(3, 4);
 *
 *   expect(mockObject).toHaveReturnedWith(7);
 *   expect(mockObject).toHaveReturnedWith(3);
 * });
 * ```
 */
function toHaveReturnedWith(
  { mock }: MockObject,
  expected: unknown,
): MatchResult {
  // TODO:(miyauci) improve assertion message
  return {
    pass: predict(mock.results, expected),
    expected,
  };
}

export { predict, toHaveReturnedWith };
