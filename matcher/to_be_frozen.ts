// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeFrozen` when checking if an object is frozen
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeFrozen,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeFrozen,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is frozen", () => {
 *   expect(Object.freeze({})).toBeFrozen();
 *   expect(1).toBeFrozen();
 *   expect({}).not.toBeFrozen();
 * });
 * ```
 */
function toBeFrozen(actual: unknown): MatchResult {
  return {
    pass: Object.isFrozen(actual),
    expected: "frozen object",
  };
}

export { toBeFrozen };
