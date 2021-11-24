// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { Mock, MockResult } from "../mock/types.ts";

function predict(mockResults: MockResult[], expected: number): boolean {
  const count = mockResults.reduce((acc, { type }) => {
    if (type === "return") {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return count === expected;
}

/** Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
 * Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
 */
function toHaveReturnedTimes({ mock }: Mock, expected: number): MatchResult {
  return {
    pass: predict(mock.results, expected),
    expected,
  };
}

export { predict, toHaveReturnedTimes };
