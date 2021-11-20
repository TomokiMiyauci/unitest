// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isFunction } from "@/deps.ts";

function toBeFunction(actual: unknown): MatchResult {
  if (isFunction(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Function",
      matcher: "toBeFunction",
    }),
  });
}

export { toBeFunction };
