// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeGreaterThanOrEqual` to compare `actual >= expected` for `number` or
 * `bigint`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value greater than or equal to", () => {
 *   expect(100).toBeGreaterThanOrEqual(99);
 *   expect(100n).toBeGreaterThanOrEqual(100n);
 *   expect(0).not.toBeGreaterThanOrEqual(1);
 * });
 * ```
 */
function toBeGreaterThanOrEqual(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: actual >= expected,
    expected,
    expectedHint: "Expected to be greater than or equal to:",
  };
}

export { toBeGreaterThanOrEqual };
