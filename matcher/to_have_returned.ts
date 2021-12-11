// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isTypeReturn, pickValue } from "../mock/utils.ts";
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

/** predict for `toHaveReturned` */
function predict(mockResults: readonly MockResult[]): boolean {
  return mockResults.some(isTypeReturn);
}

/** Use `.toHaveReturned` that the mock object successfully returned at least one
 * time
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object returned at least once", () => {
 *   const mockObject = fn(() => true);
 *   expect(mockObject).not.toHaveReturned();
 *   mockObject();
 *   expect(mockObject).toHaveReturned();
 * });
 * ```
 */
function toHaveReturned({ mock }: MockObject): MatchResult {
  return {
    actual: mock.results.filter(isTypeReturn).map(pickValue),
    actualHint: "Actual returned:",
    pass: predict(mock.results),
    expectedHint: "Expected returned:",
    expected: "0 < Actual.length",
  };
}

export { predict, toHaveReturned };
