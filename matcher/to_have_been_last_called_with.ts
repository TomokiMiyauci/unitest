// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";
import { last } from "./utils.ts";
import { equal } from "../helper/equal.ts";

/** predict for `toHaveBeenLastCalledWith` */
function predict(
  calls: MockObject["mock"]["calls"],
  ...expected: readonly unknown[]
): boolean {
  const lastCalled = last(calls);
  return equal(lastCalled, expected);
}

/** Use `.toHaveBeenLastCalledWith` to test mock object was last called with
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object of last called with", () => {
 *   const mockObject = fn();
 *   mockObject(1, 2, 3);
 *   mockObject(4, 5, 6);
 *   expect(mockObject).toHaveBeenLastCalledWith(4, 5, 6);
 *   expect(mockObject).not.toHaveBeenLastCalledWith(1, 2, 3);
 * });
 * ```
 */
function toHaveBeenLastCalledWith(
  { mock }: MockObject,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, ...expected),
    actualHint: "Actual last called with:",
    actual: last(mock.calls),
    expected,
  };
}

export { predict, toHaveBeenLastCalledWith };
