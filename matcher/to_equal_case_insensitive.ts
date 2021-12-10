// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { predict } from "./to_be.ts";

/** Use `.toEqualCaseInsensitive` when checking if a `string` is equal to another
 * ignoring the casing of both strings
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toEqualCaseInsensitive,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toEqualCaseInsensitive,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when strings are equal ignoring case", () => {
 *   expect("hello world").toEqualCaseInsensitive("hello world");
 *   expect("hello world").toEqualCaseInsensitive("HELLO WORLD");
 * });
 * ```
 */
function toEqualCaseInsensitive(actual: string, expected: string): MatchResult {
  return {
    pass: predict(actual.toLowerCase(), expected.toLowerCase()),
    expected,
    expectedHint: "Expected to be equal while ignoring case:",
  };
}

export { toEqualCaseInsensitive };
