// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toBeFalsy(actual: unknown): MatchResult {
  if (!actual) return success();

  return fail({
    message: printHint({
      actual,
      expected: "All primitive",
      matcher: "toBeFalsy",
    }),
  });
}

export { toBeFalsy };
