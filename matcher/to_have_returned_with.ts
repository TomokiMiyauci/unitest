// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal } from "../helper/equal.ts";
import { isTypeReturn, pickValue } from "../mock/utils.ts";
import type { MatchResult } from "./types.ts";
import type { MockObject } from "../mock/fn.ts";

/** Use `.toHaveReturnedWith` to ensure that a mock object returned a specific
 * value
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when mock object returned specific value", () => {
 *   const mockObject = fn((a: number, b: number) => a + b);
 *   mockObject(1, 2);
 *   mockObject(3, 4);
 *
 *   expect(mockObject).toHaveReturnedWith(7);
 *   expect(mockObject).toHaveReturnedWith(3);
 * });
 * ```
 */
function toHaveReturnedWith(
  { mock }: MockObject,
  expected: unknown,
): MatchResult {
  const typeReturns = mock.results.filter(isTypeReturn);
  return {
    actualHint: "Actual all returned:",
    resultActual: typeReturns.map(pickValue),
    pass: typeReturns.some(({ value }) => equal(value, expected)),
    expected,
  };
}

export { toHaveReturnedWith };
