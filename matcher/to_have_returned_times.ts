// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isTypeReturn } from "../mock/utils.ts";
import type { MatchResult } from "./types.ts";
import type { MockObject } from "../mock/fn.ts";

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
  const actualTimes = mock.results.filter(isTypeReturn).length;
  return {
    actualHint: "Actual returned times:",
    actual: actualTimes,
    pass: actualTimes === expected,
    expected,
  };
}

export { toHaveReturnedTimes };
