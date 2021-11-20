// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { contains, fail, printHint, success } from "@matcher/utils.ts";

function toBeOneOf(actual: unknown, expected: unknown[]): MatchResult {
  if (contains(expected, actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      expectedLabel: "Expected value to be any of:",
      matcher: "toBeOneOf",
    }),
  });
}

export { toBeOneOf };
