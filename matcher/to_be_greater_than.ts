// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeGreaterThan(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  if (Number(actual) > expected) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toBeGreaterThan",
    }),
  });
}

export { toBeGreaterThan };
