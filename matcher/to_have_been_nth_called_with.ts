// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../helper/equal.ts";

/** predict for `toHaveBeenNthCalledWith` */
function predict(
  calls: MockObject["mock"]["calls"],
  nthCall: number,
  ...expected: readonly unknown[]
): boolean {
  const call = calls[nthCall - 1];
  return equal(call, expected);
}

/** Use `.toHaveBeenNthCalledWith` to test mock object was nth called with
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object of last called with", () => {
 *   const mockObject = fn();
 *   mockObject("tomato");
 *   mockObject("potato");
 *   expect(mockObject).toHaveBeenNthCalledWith(1, "tomato");
 *   expect(mockObject).toHaveBeenNthCalledWith(2, "potato");
 * });
 * ```
 */
function toHaveBeenNthCalledWith(
  { mock }: MockObject,
  nthCall: number,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    actualHint: `Actual ${nthCall}th called with:`,
    actual: mock.calls[nthCall - 1],
    pass: predict(mock.calls, nthCall, ...expected),
    expected,
  };
}

export { predict, toHaveBeenNthCalledWith };
