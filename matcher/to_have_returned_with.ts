// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

function predict(
  mockResults: readonly MockResult[],
  expected: unknown,
): boolean {
  const result = mockResults.some(({ type, value }) =>
    type === "return" && equal(value, expected)
  );

  return result;
}

/** Use to ensure that a mock function returned a specific value. */
function toHaveReturnedWith(
  { mock }: MockObject,
  expected: unknown,
): MatchResult {
  return {
    pass: predict(mock.results, expected),
    expected,
  };
}

export { predict, toHaveReturnedWith };
