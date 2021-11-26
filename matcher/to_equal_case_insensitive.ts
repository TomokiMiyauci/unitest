// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { predict } from "./to_be.ts";

function toEqualCaseInsensitive(actual: string, expected: string): MatchResult {
  return {
    pass: predict(actual.toLowerCase(), expected.toLowerCase()),
    expected,
    expectedHint: "Expected values to be equal while ignoring case:",
  };
}

export { toEqualCaseInsensitive };
