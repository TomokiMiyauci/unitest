// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isFalse } from "@/deps.ts";

function toBeFalse(actual: unknown): MatchResult {
  if (isFalse(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: false,
      matcher: "toBeFalse",
    }),
  });
}

export { toBeFalse };
