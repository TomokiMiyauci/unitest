// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeLessThan` to compare `actual < expected` for `number` or `bigint`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value less than", () => {
 *   expect(99).toBeLessThan(100);
 *   expect(99n).toBeLessThan(100n);
 *   expect(1).not.toBeLessThan(0);
 * });
 * ```
 */
function toBeLessThan(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: actual < expected,
    expected,
    expectedHint: "Expected to be less then:",
  };
}

export { toBeLessThan };
