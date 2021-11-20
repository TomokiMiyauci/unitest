// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function predict(actual: unknown, expected: unknown): boolean {
  return Object.is(actual, expected);
}

function toBe(actual: unknown, expected: unknown): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toBe",
    }),
  });
}

export { predict, toBe };
