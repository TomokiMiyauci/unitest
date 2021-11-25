// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function predict(actual: number, expected: number, precision: number): boolean {
  if (!isFinite(actual) && !isFinite(expected)) return true;

  const expectedDiff = Math.pow(10, -precision) / 2;
  const receivedDiff = Math.abs(expected - actual);

  return receivedDiff < expectedDiff;
}

function toBeCloseTo(
  actual: number,
  expected: number,
  precision = 2,
): MatchResult {
  return {
    pass: predict(actual, expected, precision),
    expected,
  };
}

export { predict, toBeCloseTo };
