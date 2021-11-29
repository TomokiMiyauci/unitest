// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toIncludeAnyMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: containSome(actual, expected),
    expected,
    expectedHint: "Expected to include any of:",
  };
}

export { toIncludeAnyMembers };
