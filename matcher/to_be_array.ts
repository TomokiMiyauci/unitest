// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function toBeArray(actual: unknown): MatchResult {
  if (Array.isArray(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Array",
      matcher: "toBeArray",
    }),
  });
}

export { toBeArray };
