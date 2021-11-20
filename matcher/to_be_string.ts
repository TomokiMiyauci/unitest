// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isString } from "@/deps.ts";

function toBeString(actual: unknown): MatchResult {
  if (isString(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeString()`,
  });
}

export { toBeString };
