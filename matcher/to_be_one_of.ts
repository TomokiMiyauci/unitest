// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { contains } from "./utils.ts";

function toBeOneOf(actual: unknown, expected: unknown[]): MatchResult {
  return {
    pass: contains(expected, actual),
    expected,
    expectedHint: "Expected any of:",
  };
}

export { toBeOneOf };
