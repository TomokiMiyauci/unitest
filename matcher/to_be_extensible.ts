// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeExtensible` when checking if an object is extensible
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeExtensible,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeExtensible,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is extensible", () => {
 *   expect({ a: 1 }).toBeExtensible();
 *   expect(1).not.toBeExtensible();
 * });
 * ```
 */
function toBeExtensible(actual: unknown): MatchResult {
  return {
    pass: Object.isExtensible(actual),
    expected: "extensible object",
  };
}

export { toBeExtensible };
