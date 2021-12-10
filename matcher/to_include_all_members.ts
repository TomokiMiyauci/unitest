// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { containAll } from "./utils.ts";

/** Use `.toIncludeAllMembers` when checking if an `array` contains all of the same
 * members of a given set
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toIncludeAllMembers,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toIncludeAllMembers,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when given array values match the members of the set", () => {
 *   expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
 *   expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
 * });
 * ```
 */
function toIncludeAllMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: containAll(actual, expected),
    expectedHint: "Expected to have all of the members:",
    expected,
  };
}

export { toIncludeAllMembers };
