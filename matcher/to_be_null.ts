// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { isNull } from "@/deps.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeNull(actual: unknown): MatchResult {
  if (isNull(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeNull()`,
  });
}

export { toBeNull };
