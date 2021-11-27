// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containAll } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toContainEntries(
  actual: object,
  expected: [string, unknown][],
): MatchResult {
  const entries = Object.entries(actual);

  return {
    pass: containAll(entries, expected),
    actual: entries,
    actualHint: "Actual entries:",
    expected,
    expectedHint: "Expected to contain all:",
  };
}

export { toContainEntries };
