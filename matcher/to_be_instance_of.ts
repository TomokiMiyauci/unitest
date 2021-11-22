// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

// deno-lint-ignore ban-types
function toBeInstanceOf(actual: unknown, expected: Function): MatchResult {
  return {
    pass: actual instanceof expected,
    expected,
  };
}

export { toBeInstanceOf };
