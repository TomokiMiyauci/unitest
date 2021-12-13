// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toHaveBeenCalledTimes` to ensure that a mock object got called exact
 * number of times
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object called 2 times", () => {
 *   const mockObject = fn();
 *   mockObject();
 *   mockObject();
 *   expect(mockObject).toHaveBeenCalledTimes(2);
 * });
 * ```
 */
function toHaveBeenCalledTimes(
  { mock }: MockObject,
  expected: number,
): MatchResult {
  const length = mock.calls.length;
  return {
    actualHint: "Actual called times:",
    actual: length,
    pass: length === expected,
    expectedHint: "Expected called times:",
    expected,
  };
}

export { toHaveBeenCalledTimes };
