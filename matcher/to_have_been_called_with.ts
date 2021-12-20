// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { contains } from "./utils.ts";
import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toHaveBeenCalledWith` to ensure that a mock function was called with
 * specific arguments
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object called with arg", () => {
 *   const mockObject = fn();
 *   mockObject(1, 2, 3);
 *   expect(mockObject).toHaveBeenCalledWith(1, 2, 3);
 * });
 * ```
 */
function toHaveBeenCalledWith(
  { mock }: MockObject,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: contains(mock.calls, expected),
    actualHint: "Actual args:",
    resultActual: mock.calls,
    expectedHint: "Expected arg:",
    expected,
  };
}

export { toHaveBeenCalledWith };
