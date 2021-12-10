// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

/** predict for `toHaveReturned` */
function predict(mockResults: readonly MockResult[]): boolean {
  return mockResults.some(({ type }) => type === "return");
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
  // TODO:(miyauci) improve assertion message
  return {
    pass: predict(mock.results),
    expected: "0 < mock calls",
  };
}

export { predict, toHaveReturned };
