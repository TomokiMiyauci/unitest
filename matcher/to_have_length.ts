// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toHaveLength` to check that an object has a `.length` property and it is
 * set to a certain numeric value
 * ```ts
 * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when object of length property equal to", () => {
 *   expect([1, 2, 3]).toHaveLength(3);
 *   expect("abc").toHaveLength(3);
 *   expect("").not.toHaveLength(5);
 * });
 * ```
 */
function toHaveLength(
  { length }: { length?: number },
  expected: number,
): MatchResult {
  return {
    actual: length,
    actualHint: "Actual length:",
    pass: length === expected,
    expected,
  };
}

export { toHaveLength };
