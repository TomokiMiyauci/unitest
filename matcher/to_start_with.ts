// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toStartWith(actual: string, prefix: string): MatchResult {
  return {
    pass: actual.startsWith(prefix),
    expectedHint: "Expected to start with:",
    expected: prefix,
  };
}

export { toStartWith };
