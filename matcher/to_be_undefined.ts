// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { isUndefined } from "@/deps.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeUndefined(actual: unknown): MatchResult {
  if (isUndefined(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: undefined,
      matcher: "toBeUndefined",
    }),
  });
}

export { toBeUndefined };
