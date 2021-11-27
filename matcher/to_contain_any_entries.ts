// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toContainAnyEntries(
  actual: object,
  expected: [string, unknown][],
): MatchResult {
  const entries = Object.entries(actual);
  return {
    pass: containSome(entries, expected),
    actual: Object.entries(actual),
    actualHint: "Actual entries:",
    expected,
    expectedHint: "Expected to contain any of:",
  };
}

export { toContainAnyEntries };
