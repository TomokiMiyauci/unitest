// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeGreaterThan` to compare `actual > expected` for `number` or `bigint`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value greater than", () => {
 *   expect(100).toBeGreaterThan(99);
 *   expect(100n).toBeGreaterThan(99n);
 *   expect(1).not.toBeGreaterThan(1);
 * });
 * ```
 */
function toBeGreaterThan(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: actual > expected,
    expected,
    expectedHint: "Expected to greater than:",
  };
}

export { toBeGreaterThan };
