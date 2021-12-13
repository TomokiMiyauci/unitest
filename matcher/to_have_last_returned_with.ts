// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";
import { last } from "./utils.ts";
import type { MockResult } from "../mock/mock.ts";
import type { MockObject } from "../mock/fn.ts";

/** predict for `toHaveLastReturnedWith` */
function predict(
  mockResults: readonly MockResult[],
  expected: unknown,
): boolean {
  const { type, value } = last(mockResults) ?? {};

  return type === "return" && equal(value, expected);
}

/** Use `.toHaveLastReturnedWith` to test the specific value that a mock object last
 * returned
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object of last returned with", () => {
 *   const mockObject = fn((a: number, b: number) => a + b);
 *   mockObject(1, 2);
 *   mockObject(3, 4);
 *   expect(mockObject).toHaveLastReturnedWith(7);
 * });
 * ```
 */
function toHaveLastReturnedWith(
  { mock }: MockObject,
  expected: unknown,
): MatchResult {
  return {
    actualHint: "Actual last returned with:",
    actual: last(mock.results)?.value,
    pass: predict(mock.results, expected),
    expected,
  };
}

export { predict, toHaveLastReturnedWith };
