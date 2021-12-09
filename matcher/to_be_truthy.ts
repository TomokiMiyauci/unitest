// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeTruthy` when you don't care what a value is and you want to ensure a
 * value is true in a boolean context
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be truthy", () => {
 *   expect(true).toBeTruthy();
 *   expect(1).toBeTruthy();
 *   expect(0).not.toBeTruthy();
 * });
 * ```
 */
function toBeTruthy(actual: unknown): MatchResult {
  return {
    pass: !!actual,
    expected: `All except false, 0, -0, 0n, "", null, undefined, NaN`,
  };
}

export { toBeTruthy };
