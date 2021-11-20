// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, stringify, success } from "@matcher/utils.ts";

function toBeAfterOrEqualTo(actual: Date, expected: Date): MatchResult {
  if (actual >= expected) return success();

  return fail({
    message: printHint({
      actual,
      expected: `Date to be after or equal to ${stringify(expected)}`,
      matcherArgs: [expected],
      matcher: "toBeAfterOrEqualTo",
    }),
  });
}

export { toBeAfterOrEqualTo };
