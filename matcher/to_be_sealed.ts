// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeSealed` when checking if an value is sealed
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeSealed,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeSealed,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is sealed", () => {
 *   expect(Object.seal({})).toBeSealed();
 *   expect(1).toBeSealed();
 *   expect({}).not.toBeSealed();
 * });
 * ```
 */
function toBeSealed(actual: unknown): MatchResult {
  return {
    pass: Object.isSealed(actual),
    expected: "sealed object",
  };
}

export { toBeSealed };
