// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toEndWith` when checking if a `string` ends with a given `string` suffix
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toEndWith,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toEndWith,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is ends with given string", () => {
 *   expect("hello world").toEndWith("world");
 *   expect("hello world").not.toEndWith("hello");
 * });
 * ```
 */
function toEndWith(actual: string, suffix: string): MatchResult {
  return {
    pass: actual.endsWith(suffix),
    expected: suffix,
    expectedHint: "Expected to end with:",
  };
}

export { toEndWith };
