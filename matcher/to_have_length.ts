// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function predict(actual: unknown, expected: number): boolean {
  return (actual as any)?.length === expected;
}

function toHaveLength(actual: unknown, expected: number): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toHaveLength",
    }),
  });
}

export { predict, toHaveLength };
