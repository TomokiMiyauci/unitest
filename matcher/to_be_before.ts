// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, stringify, success } from "@matcher/utils.ts";

function toBeBefore(actual: Date, expected: Date): MatchResult {
  if (actual < expected) return success();

  return fail({
    message: printHint({
      actual,
      expected: `Date to be before ${stringify(expected)}`,
      matcherArgs: [expected],
      matcher: "toBeBefore",
    }),
  });
}

export { toBeBefore };
