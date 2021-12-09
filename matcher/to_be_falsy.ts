// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeFalsy` when you don't care what a value is and you want to ensure a
 * value is false in a boolean context
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be falsy", () => {
 *   expect(false).toBeFalsy();
 *   expect(0).toBeFalsy();
 *   expect(1).not.toBeFalsy();
 * });
 * ```
 */
function toBeFalsy(actual: unknown): MatchResult {
  return {
    pass: !actual,
    expectedHint: "Expected to any of:",
    expected: `false, 0, -0, 0n, "", null, undefined, NaN`,
  };
}

export { toBeFalsy };
