// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal } from "../deps.ts";
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";
import type { Mock, MockResult } from "../mock/types.ts";

function predict(mockResults: MockResult[], expected: unknown): boolean {
  const result = mockResults.some(({ type, value }) =>
    type === "return" && equal(value, expected)
  );

  return result;
}

/**
 * Use to ensure that a mock function returned a specific value.
 *
 * Optionally, you can provide a type for the expected value via a generic.
 * This is particularly useful for ensuring expected objects have the right structure.
 */
function toHaveReturnedWith({ mock }: Mock, expected: unknown): MatchResult {
  if (predict(mock.results, expected)) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected,
      matcherArgs: [expected],
      matcher: "toHaveReturnedWith",
    }),
  });
}

export { predict, toHaveReturnedWith };
