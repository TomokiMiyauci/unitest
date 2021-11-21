// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, stringify, success } from "./utils.ts";

function toBeBetween(
  actual: Date,
  startDate: Date,
  endDate: Date,
): MatchResult {
  if (actual >= startDate && actual <= endDate) return success();

  return fail({
    message: printHint({
      actual,
      expected: `Date to be between ${stringify(startDate)} and ${endDate}`,
      matcherArgs: [startDate, endDate],
      matcher: "toBeBetween",
    }),
  });
}

export { toBeBetween };
