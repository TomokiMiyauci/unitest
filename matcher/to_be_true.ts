// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isTrue } from "@/deps.ts";

function toBeTrue(actual: unknown): MatchResult {
  if (isTrue(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeTrue()`,
  });
}

export { toBeTrue };
