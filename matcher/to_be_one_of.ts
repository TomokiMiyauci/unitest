// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { contains } from "./utils.ts";

/** Use `.toBeOneOf` when checking if a value is a member of a given `Array`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeOneOf,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeOneOf,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is in given array", () => {
 *   expect(1).toBeOneOf([1, 2, 3]);
 *   expect(4).not.toBeOneOf([1, 2, 3]);
 * });
 * ```
 */
function toBeOneOf(actual: unknown, expected: readonly unknown[]): MatchResult {
  return {
    pass: contains(expected, actual),
    expected,
    expectedHint: "Expected to any of:",
  };
}

export { toBeOneOf };
