// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toIncludeMultiple` when checking if a `string` includes all of the given
 * substrings
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
 * test("passes when value includes all substrings", () => {
 *   expect("hello world").toIncludeMultiple(["world", "hello"]);
 *   expect("hello world").not.toIncludeMultiple(["world", "hello", "bob"]);
 * });
 * ```
 */
function toIncludeMultiple(actual: string, expected: string[]): MatchResult {
  return {
    pass: expected.every((v) => actual.includes(v)),
    expected,
    expectedHint: "Expected to contain all substrings:",
  };
}

export { toIncludeMultiple };
