// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { contains } from "./utils.ts";

function toBeOneOf(actual: unknown, expected: unknown[]): MatchResult {
  return {
    pass: contains(expected, actual),
    expected,
    expectedLabel: "Expected any of:",
  };
}

export { toBeOneOf };
