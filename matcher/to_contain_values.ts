// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containAll } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function toContainValues(actual: object, expected: unknown[]): MatchResult {
  const values = Object.values(actual);

  return {
    pass: containAll(values, expected),
    actual: values,
    actualHint: "Actual values:",
    expected,
    expectedHint: "Expected to contain all:",
  };
}

export { toContainValues };
