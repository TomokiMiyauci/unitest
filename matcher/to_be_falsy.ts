// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";

function toBeFalsy(actual: unknown): MatchResult {
  if (!actual) return success();

  return fail({
    message: `expect(${String(actual)}).toBeTruthy()`,
  });
}

export { toBeFalsy };
