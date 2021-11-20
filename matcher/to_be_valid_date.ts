// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isValidDate } from "@/deps.ts";

function toBeValidDate(actual: Date): MatchResult {
  if (isValidDate(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "All Date except Invalid Date",
      matcher: "toBeValidDate",
    }),
  });
}

export { toBeValidDate };
