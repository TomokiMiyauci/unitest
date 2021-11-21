// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function toSatisfy(
  actual: unknown,
  predicate: (actual: unknown) => boolean,
): MatchResult {
  if (predicate(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "satisfy predicate",
      matcher: "toSatisfy",
    }),
  });
}

export { toSatisfy };
