// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function toBeFinite(actual: unknown): MatchResult {
  if (Number.isFinite(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "finite number",
      matcher: "toBeFinite",
    }),
  });
}

export { toBeFinite };