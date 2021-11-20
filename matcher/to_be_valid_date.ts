// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isValidDate } from "@/deps.ts";

function toBeValidDate(actual: Date): MatchResult {
  if (isValidDate(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeValidDate()`,
  });
}

export { toBeValidDate };
