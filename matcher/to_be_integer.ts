// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeInteger` when checking if a number is an integer
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeInteger,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeInteger,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an integer", () => {
 *   expect(1).toBeInteger();
 *   expect(1.0).toBeInteger();
 *   expect(1.1).not.toBeInteger();
 * });
 * ```
 */
function toBeInteger(actual: unknown): MatchResult {
  return {
    pass: Number.isInteger(actual),
    expected: "integer",
  };
}

export { toBeInteger };
