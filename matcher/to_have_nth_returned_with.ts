// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { Mock, MockResult } from "../mock/types.ts";
import { isUndefined } from "../deps.ts";
import { equal } from "../helper/equal.ts";

function predict(
  mockResults: MockResult[],
  nthCall: number,
  expected: unknown,
): boolean {
  const mockResult = mockResults[nthCall - 1] as MockResult | undefined;

  if (isUndefined(mockResult)) {
    return false;
  }

  return mockResult.type === "return" && equal(mockResult.value, expected);
}

/** Use to test the specific value that a mock function returned for the nth call. */
function toHaveNthReturnedWith(
  { mock }: Mock,
  nthCall: number,
  expected: unknown,
): MatchResult {
  return {
    pass: predict(mock.results, nthCall, expected),
    expected,
  };
}

export { predict, toHaveNthReturnedWith };
