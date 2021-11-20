// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { isNull } from "@/deps.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeNull(actual: unknown): MatchResult {
  if (isNull(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: null,
      matcher: "toBeNull",
    }),
  });
}

export { toBeNull };
