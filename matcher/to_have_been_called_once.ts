// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toHaveBeenCalledOnce` to check if a mock object was called exactly one
 * time
 * ```ts
 * import {
 *   defineExpect,
 *   fn,
 *   not,
 *   test,
 *   toHaveBeenCalledOnce,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toHaveBeenCalledOnce,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes only if mock object was called exactly once", () => {
 *   const mockObject = fn();
 *
 *   mockObject();
 *   expect(mockObject).toHaveBeenCalledOnce();
 *   mockObject();
 *   expect(mockObject).not.toHaveBeenCalledOnce();
 * });
 * ```
 */
function toHaveBeenCalledOnce(
  { mock: { calls: { length } } }: MockObject,
): MatchResult {
  return {
    actual: length,
    actualHint: "Actual called times:",
    pass: length === 1,
    expectedHint: "Expected called times:",
    expected: 1,
  };
}

export { toHaveBeenCalledOnce };
