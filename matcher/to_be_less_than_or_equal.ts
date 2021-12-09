// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeLessThanOrEqual` to compare `actual <= expected` for `number` or
 * `bigint`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value less than or equal to", () => {
 *   expect(99).toBeLessThanOrEqual(100);
 *   expect(100n).toBeLessThanOrEqual(100n);
 *   expect(1).not.toBeLessThanOrEqual(0);
 * });
 * ```
 */
function toBeLessThanOrEqual(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: actual <= expected,
    expectedHint: "Expected to be less then or equal to:",
    expected,
  };
}

export { toBeLessThanOrEqual };
