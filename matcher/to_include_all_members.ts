// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { contains } from "./utils.ts";

function predict(
  actual: readonly unknown[],
  expected: readonly unknown[],
): boolean {
  return expected.every((value) => contains(actual, value));
}

function toIncludeAllMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: predict(actual, expected),
    expectedHint: "Expected to have all of the members",
    expected,
  };
}

export { predict, toIncludeAllMembers };