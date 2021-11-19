// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { isUndefined } from "@/deps.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeUndefined(actual: unknown): MatchResult {
  if (isUndefined(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeUndefined()`,
  });
}

export { toBeUndefined };
