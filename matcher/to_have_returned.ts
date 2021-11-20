// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import type { Mock, MockResult } from "@mock/types.ts";

function predict(mockResults: MockResult[]): boolean {
  return mockResults.some(({ type }) => type === "return");
}

/**
 * Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
 */
function toHaveReturned({ mock }: Mock): MatchResult {
  if (predict(mock.results)) return success();

  return fail({
    message: `expect(${stringify(mock)}).toHaveReturned()`,
  });
}

export { predict, toHaveReturned };