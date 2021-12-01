// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { has, prop } from "./utils.ts";
import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";

function predict(
  actual: object,
  [key, value]: [PropertyKey, unknown],
): boolean {
  const _has = has(key, actual);
  return _has && equal(prop(key, actual), value);
}

function toContainEntry(
  actual: object,
  expected: [PropertyKey, unknown],
): MatchResult {
  return {
    pass: predict(actual, expected),
    actual: Object.entries(actual),
    actualHint: "Actual entry:",
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { predict, toContainEntry };
