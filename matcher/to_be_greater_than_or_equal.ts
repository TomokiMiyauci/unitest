// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function toBeGreaterThanOrEqual(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  if (Number(actual) >= expected) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toBeGreaterThanOrEqual",
    }),
  });
}

export { toBeGreaterThanOrEqual };
