// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import type { Mock, MockResult } from "@mock/types.ts";

function predict(mockResults: MockResult[], expected: number): boolean {
  const count = mockResults.reduce((acc, { type }) => {
    if (type === "return") {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return count === expected;
}

/**
 * Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
 * Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
 */
function toHaveReturnedTimes({ mock }: Mock, expected: number): MatchResult {
  if (predict(mock.results, expected)) return success();

  return fail({
    message: `expect(${stringify(mock)}).toHaveReturnedTimes(${
      stringify(expected)
    })`,
  });
}

export { predict, toHaveReturnedTimes };
