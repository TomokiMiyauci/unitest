// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { MockObject, MockResult } from "../mock/mock.ts";

function predict(mockResults: readonly MockResult[]): boolean {
  return mockResults.some(({ type }) => type === "return");
}

/** Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time */
function toHaveReturned({ mock }: MockObject): MatchResult {
  return {
    pass: predict(mock.results),
    expected: "0 < mock calls",
  };
}

export { predict, toHaveReturned };
