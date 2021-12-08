// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeArray` when checking if a value is an Array
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeArray,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeArray,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an array", () => {
 *   expect([]).toBeArray();
 *   expect([1]).toBeArray();
 *   expect(true).not.toBeArray();
 * });
 * ```
 */
function toBeArray(actual: unknown): MatchResult {
  return {
    pass: Array.isArray(actual),
    expected: "array",
  };
}

export { toBeArray };
