// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isSymbol } from "@/deps.ts";

function toBeSymbol(actual: unknown): MatchResult {
  if (isSymbol(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeSymbol()`,
  });
}

export { toBeSymbol };
