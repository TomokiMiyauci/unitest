// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal } from "@/deps.ts";
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success, takeLast } from "@matcher/utils.ts";
import type { Mock, MockResult } from "@mock/types.ts";

function predict(mockResults: MockResult[], expected: unknown): boolean {
  const { type, value } = takeLast(1, mockResults)[0] ?? {};

  return type === "return" && equal(value, expected);
}

/**
 * Use to test the specific value that a mock function last returned.
 */
function toHaveLastReturnedWith(
  { mock }: Mock,
  expected: unknown,
): MatchResult {
  if (predict(mock.results, expected)) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected,
      matcherArgs: [expected],
      matcher: "toHaveLastReturnedWith",
    }),
  });
}

export { predict, toHaveLastReturnedWith };
