// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toIncludeAnyMembers` when checking if an `array` contains any of the
 * members of a given set
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toIncludeAnyMembers,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toIncludeAnyMembers,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when given array values match any of the members in the set", () => {
 *   expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
 *   expect([1, 2, 2]).toIncludeAnyMembers([2]);
 *   expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
 * });
 * ```
 */
function toIncludeAnyMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: containSome(actual, expected),
    expected,
    expectedHint: "Expected to include any of:",
  };
}

export { toIncludeAnyMembers };
