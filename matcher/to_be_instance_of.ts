// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

// deno-lint-ignore ban-types
function toBeInstanceOf(actual: unknown, expected: Function): MatchResult {
  if (actual instanceof expected) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeInstanceOf(${
      stringify(expected)
    })`,
  });
}

export { toBeInstanceOf };
