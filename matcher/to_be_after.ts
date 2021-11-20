// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeAfter(actual: Date, expected: Date): MatchResult {
  if (actual > expected) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toBeAfter",
    }),
  });
}

export { toBeAfter };
