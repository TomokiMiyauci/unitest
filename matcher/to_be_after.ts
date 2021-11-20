// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, stringify, success } from "@matcher/utils.ts";

function toBeAfter(actual: Date, expected: Date): MatchResult {
  if (actual > expected) return success();

  return fail({
    message: printHint({
      actual,
      expected: `Date to be after ${stringify(expected)}`,
      matcherArgs: [expected],
      matcher: "toBeAfter",
    }),
  });
}

export { toBeAfter };
