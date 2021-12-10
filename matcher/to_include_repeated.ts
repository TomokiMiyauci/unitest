// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** predict for `toIncludeRepeated` */
function predict(
  actual: string,
  substring: string,
  times: number,
): boolean {
  return (actual.match(new RegExp(substring, "g")) || []).length === times;
}

/** Use `.toIncludeRepeated` when checking if a `string` includes the given `string`
 * substring the correct number of times
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toIncludeRepeated,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toIncludeRepeated,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value includes substring n times", () => {
 *   expect("hello hello world").toIncludeRepeated("hello", 2);
 *   expect("hello hello world").not.toIncludeRepeated("hello", 1);
 * });
 * ```
 */
function toIncludeRepeated(
  actual: string,
  substring: string,
  times: number,
): MatchResult {
  return {
    pass: predict(actual, substring, times),
    expected: substring,
    expectedHint: `Expected to include repeated ${times} times:`,
  };
}

export { predict, toIncludeRepeated };
