// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toInclude(actual: string, substring: string): MatchResult {
  return {
    pass: actual.includes(substring),
    expected: substring,
    expectedHint: "Expected to include:",
  };
}

export { toInclude };
