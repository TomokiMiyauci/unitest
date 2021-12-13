// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";
import { isLength0 } from "../deps.ts";

/** Use `.toHaveBeenCalled` to ensure that a mock object got called
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object called", () => {
 *   const mockObject = fn();
 *   expect(mockObject).not.toHaveBeenCalled();
 *   mockObject();
 *   expect(mockObject).toHaveBeenCalled();
 * });
 * ```
 */
function toHaveBeenCalled({ mock }: MockObject): MatchResult {
  return {
    actualHint: "Actual calls:",
    actual: mock.calls.length,
    pass: !isLength0(mock.calls),
    expected: "0 < Actual",
  };
}

export { toHaveBeenCalled };
