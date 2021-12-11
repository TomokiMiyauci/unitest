// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { head } from "./utils.ts";
import { isNumber } from "../deps.ts";
import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toHaveBeenCalledBefore` */
function predict(a: number | undefined, b: number | undefined): boolean {
  return isNumber(a) && (!isNumber(b) || (isNumber(b) && a < b));
}

/** Use `.toHaveBeenCalledBefore` when checking if a mock object was called before
 * another mock object
 * ```ts
 * import {
 *   defineExpect,
 *   fn,
 *   not,
 *   test,
 *   toHaveBeenCalledBefore,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toHaveBeenCalledBefore,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("calls mockObject1 before mockObject2", () => {
 *   const mockObject1 = fn();
 *   const mockObject2 = fn();
 *
 *   mockObject1();
 *   mockObject2();
 *   mockObject1();
 *
 *   expect(mockObject1).toHaveBeenCalledBefore(mockObject2);
 * });
 * ```
 */
function toHaveBeenCalledBefore(
  { mock }: MockObject,
  expected: MockObject,
): MatchResult {
  const actualOlderTimestamp = head(mock.callOrderNumbers);
  const expectedOlderTimestamp = head(expected.mock.callOrderNumbers);
  const pass = predict(actualOlderTimestamp, expectedOlderTimestamp);

  const sharedMessage = "older invocation timestamp:";
  const none = "none";

  return {
    actualHint: `Actual ${sharedMessage}`,
    actual: actualOlderTimestamp ?? none,
    pass,
    expectedHint: `Expected ${sharedMessage}`,
    expected: expectedOlderTimestamp ?? none,
  };
}

export { predict, toHaveBeenCalledBefore };
