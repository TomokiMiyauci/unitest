// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeNaN(actual: unknown): MatchResult {
  if (Number.isNaN(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeNaN()`,
  });
}

export { toBeNaN };
