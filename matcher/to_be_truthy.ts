// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";

function toBeTruthy(actual: unknown): MatchResult {
  if (actual) return success();

  return fail({
    message: printHint({
      actual,
      expected: "All value except primitive",
      matcher: "toBeTruthy",
    }),
  });
}

export { toBeTruthy };
