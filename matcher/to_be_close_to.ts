// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** High precision round */
function roundTo(num: number, digit: number): number {
  return +(Math.round(Number(num + `e+${digit}`)) + `e-${digit}`);
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
  const actualRounded = roundTo(actual, precision);
  const expectedRounded = roundTo(expected, precision);
  return {
    actualHint: `Actual rounded ${precision} digit:`,
    actual: actualRounded,
    pass: actualRounded === expectedRounded,
    expectedHint: `Expected rounded ${precision} digit:`,
    expected: expectedRounded,
  };
}

export { roundTo, toBeCloseTo };
