// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isDate } from "@/deps.ts";

function toBeDate(actual: unknown): MatchResult {
  if (isDate(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeDate()`,
  });
}

export { toBeDate };
