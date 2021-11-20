// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

// deno-lint-ignore ban-types
function toBeInstanceOf(actual: unknown, expected: Function): MatchResult {
  if (actual instanceof expected) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toBeInstanceOf",
    }),
  });
}

export { toBeInstanceOf };
