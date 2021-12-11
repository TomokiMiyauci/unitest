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

const sharedMessage = "older call order number:";
const none = "none";
const actualHint = `Actual ${sharedMessage}`;
const expectedHint = `Expected ${sharedMessage}`;

/** Use `.toHaveBeenCalledBefore` when checking if a mock object was called before
 * another mock object
 * ```ts
 * import {
 *   defineExpect,
 *   fn,
 *   test,
 *   toHaveBeenCalledBefore,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toHaveBeenCalledBefore,
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

  return {
    actualHint,
    actual: actualOlderTimestamp ?? none,
    pass,
    expectedHint,
    expected: expectedOlderTimestamp ?? none,
  };
}

export { actualHint, expectedHint, none, predict, toHaveBeenCalledBefore };
