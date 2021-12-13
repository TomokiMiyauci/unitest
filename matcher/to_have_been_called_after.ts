// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { head } from "./utils.ts";
import { isNumber } from "../deps.ts";
import {
  actualHint,
  expectedHint,
  none,
} from "./to_have_been_called_before.ts";
import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toHaveBeenCalledAfter` */
function predict(a: number | undefined, b: number | undefined): boolean {
  return isNumber(b) && (!isNumber(a) || (isNumber(a) && a > b));
}

/** Use `.toHaveBeenCalledAfter` when checking if a mock object was called after
 * another mock object
 * ```
 * import {
 *   defineExpect,
 *   fn,
 *   test,
 *   toHaveBeenCalledAfter,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toHaveBeenCalledAfter,
 *   },
 * });
 *
 * test("calls mockObject1 after mockObject2", () => {
 *   const mockObject1 = fn();
 *   const mockObject2 = fn();
 *
 *   mockObject2();
 *   mockObject1();
 *   mockObject2();
 *
 *   expect(mockObject1).toHaveBeenCalledAfter(mockObject2);
 * });
 * ```
 */
function toHaveBeenCalledAfter(
  { mock }: MockObject,
  expected: MockObject,
): MatchResult {
  const actualOlderTimestamp = head(mock.callOrderNumbers);
  const expectedOlderTimestamp = head(expected.mock.callOrderNumbers);
  const pass = predict(actualOlderTimestamp, expectedOlderTimestamp);

  return {
    actualHint,
    actual: actualOlderTimestamp ?? none,
    pass,
    expectedHint,
    expected: expectedOlderTimestamp ?? none,
  };
}

export { predict, toHaveBeenCalledAfter };
