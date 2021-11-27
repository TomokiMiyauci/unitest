// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toContainAnyValues(actual: object, expected: unknown[]): MatchResult {
  const actualValue = Object.values(actual);

  return {
    pass: containSome(actualValue, expected),
    actual: actualValue,
    actualHint: "Actual values:",
    expected,
    expectedHint: "Expected to contain any of values:",
  };
}

export { toContainAnyValues };
