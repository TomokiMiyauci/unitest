// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toIncludeMultiple(actual: string, expected: string[]): MatchResult {
  return {
    pass: expected.every((v) => actual.includes(v)),
    expected,
    expectedHint: "Expected to contain all substrings:",
  };
}

export { toIncludeMultiple };
