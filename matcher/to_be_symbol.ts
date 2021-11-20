// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isSymbol } from "@/deps.ts";

function toBeSymbol(actual: unknown): MatchResult {
  if (isSymbol(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Symbol",
      matcher: "toBeSymbol",
    }),
  });
}

export { toBeSymbol };
