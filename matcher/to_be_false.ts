// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";
import { isFalse } from "@/deps.ts";

function toBeFalse(actual: unknown): MatchResult {
  if (isFalse(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeFalse()`,
  });
}

export { toBeFalse };