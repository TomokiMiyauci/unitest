// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeNaN` when checking a value is `NaN`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value less than", () => {
 *   expect(NaN).toBeNaN();
 *   expect(-NaN).toBeNaN();
 *   expect(1).not.toBeNaN();
 * });
 * ```
 */
function toBeNaN(actual: unknown): MatchResult {
  return {
    pass: Number.isNaN(actual),
    expected: NaN,
  };
}

export { toBeNaN };
