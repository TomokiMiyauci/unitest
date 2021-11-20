// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isEven } from "@/deps.ts";

function toBeEven(actual: number): MatchResult {
  if (isEven(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "even",
      matcher: "toBeEven",
    }),
  });
}

export { toBeEven };
