// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isNumber } from "@/deps.ts";

function toBeNumber(actual: unknown): MatchResult {
  if (isNumber(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeNumber()`,
  });
}

export { toBeNumber };