// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function predict(actual: number, expected: number, precision: number): boolean {
  if (!isFinite(actual) && !isFinite(expected)) return true;

  const expectedDiff = Math.pow(10, -precision) / 2;
  const receivedDiff = Math.abs(expected - actual);

  return receivedDiff < expectedDiff;
}

/** Use `.toBeCloseTo` to compare floating point numbers for approximate equality
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("adding works sanely with decimals", () => {
 *   expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
 * });
 * ```
 */
function toBeCloseTo(
  actual: number,
  expected: number,
  precision = 2,
): MatchResult {
  return {
    pass: predict(actual, expected, precision),
    expectedHint: "Expected to approximate:",
    // TODO:(miyauci) more detail hint
    expected,
  };
}

export { predict, toBeCloseTo };
