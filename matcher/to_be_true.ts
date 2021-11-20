// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isTrue } from "@/deps.ts";

function toBeTrue(actual: unknown): MatchResult {
  if (isTrue(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: true,
      matcher: "toBeTrue",
    }),
  });
}

export { toBeTrue };
