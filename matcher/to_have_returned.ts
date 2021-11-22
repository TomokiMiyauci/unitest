// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import type { Mock, MockResult } from "../mock/types.ts";

function predict(mockResults: MockResult[]): boolean {
  return mockResults.some(({ type }) => type === "return");
}

/** Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time */
function toHaveReturned({ mock }: Mock): MatchResult {
  return {
    pass: predict(mock.results),
    expected: "0 < mock calls",
  };
}

export { predict, toHaveReturned };
