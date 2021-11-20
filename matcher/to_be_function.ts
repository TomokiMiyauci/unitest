// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isFunction } from "@/deps.ts";

function toBeFunction(actual: unknown): MatchResult {
  if (isFunction(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeFunction()`,
  });
}

export { toBeFunction };
