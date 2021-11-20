// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isBoolean } from "@/deps.ts";

function toBeBoolean(actual: unknown): MatchResult {
  if (isBoolean(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Boolean",
      matcher: "toBeBoolean",
    }),
  });
}

export { toBeBoolean };
