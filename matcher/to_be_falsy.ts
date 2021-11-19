// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";

function toBeFalsy(actual: unknown): MatchResult {
  if (!actual) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeTruthy()`,
  });
}

export { toBeFalsy };
