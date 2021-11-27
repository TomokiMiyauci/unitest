// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { has } from "./utils.ts";
import type { MatchResult } from "./types.ts";

function predict(actual: object, expected: PropertyKey[]): boolean {
  return expected.some((value) => has(value, actual));
}

function toContainAnyKeys(
  actual: object,
  expected: PropertyKey[],
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to contain any of keys:",
    actualHint: "Actual keys:",
    actual: [
      ...Object.keys(actual),
      ...Object.getOwnPropertySymbols(actual),
    ],
  };
}

export { predict, toContainAnyKeys };
