// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, stringify, success } from "./utils.ts";

function toBeBeforeOrEqualTo(actual: Date, expected: Date): MatchResult {
  if (actual <= expected) return success();

  return fail({
    message: printHint({
      actual,
      expected: `Date to be before or equal to ${stringify(expected)}`,
      matcherArgs: [expected],
      matcher: "toBeBeforeOrEqual",
    }),
  });
}

export { toBeBeforeOrEqualTo };
