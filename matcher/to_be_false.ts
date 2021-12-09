// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isFalse } from "../deps.ts";

/** Use `.toBeFalse` when checking a value is equal (===) to false
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeFalse,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeFalse,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("should be false", () => {
 *   expect(false).toBeFalse();
 *   expect(true).not.toBeFalse();
 * });
 * ```
 */
function toBeFalse(actual: unknown): MatchResult {
  return {
    pass: isFalse(actual),
    expected: false,
  };
}

export { toBeFalse };
