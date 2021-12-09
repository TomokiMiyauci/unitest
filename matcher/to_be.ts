// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function predict(actual: unknown, expected: unknown): boolean {
  return Object.is(actual, expected);
}

/** Use `.toBe` to compare primitive values
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be", () => {
 *   expect(0).toBe(0);
 *   expect(0).not.toBe(-0);
 * });
 * ```
 */
function toBe(actual: unknown, expected: unknown): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toBe };
