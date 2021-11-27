// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { contains } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toContainValue(actual: object, expected: unknown): MatchResult {
  const actualValue = Object.values(actual);
  return {
    pass: contains(actualValue, expected),
    actual: actualValue,
    actualHint: "Actual values:",
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { toContainValue };
