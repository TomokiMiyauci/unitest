// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toEndWith(actual: string, suffix: string): MatchResult {
  return {
    pass: actual.endsWith(suffix),
    expected: suffix,
    expectedHint: "Expected to end with:",
  };
}

export { toEndWith };
