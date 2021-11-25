// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeInstanceOf(actual: unknown, expected: Function): MatchResult {
  return {
    pass: actual instanceof expected,
    expected,
  };
}

export { toBeInstanceOf };
