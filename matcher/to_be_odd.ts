// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isOdd } from "@/deps.ts";

function toBeOdd(actual: number): MatchResult {
  if (isOdd(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "odd",
      matcher: "toBeOdd",
    }),
  });
}

export { toBeOdd };