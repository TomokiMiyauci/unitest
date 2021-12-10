// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toInclude` when checking if a `string` includes the given `string`
 * substring
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toInclude,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toInclude,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value includes substring", () => {
 *   expect("hello world").toInclude("ell");
 *   expect("hello world").not.toInclude("bob");
 * });
 * ```
 */
function toInclude(actual: string, substring: string): MatchResult {
  return {
    pass: actual.includes(substring),
    expected: substring,
    expectedHint: "Expected to include:",
  };
}

export { toInclude };
