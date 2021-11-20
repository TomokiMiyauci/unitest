// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeNaN(actual: unknown): MatchResult {
  if (Number.isNaN(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: NaN,
      matcher: "toBeNaN",
    }),
  });
}

export { toBeNaN };
