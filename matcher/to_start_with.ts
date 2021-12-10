// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toStartWith` when checking if a String starts with a given String prefix
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toStartWith,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toStartWith,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is starts with given string", () => {
 *   expect("hello world").toStartWith("hello");
 *   expect("hello world").not.toStartWith("world");
 * });
 * ```
 */
function toStartWith(actual: string, prefix: string): MatchResult {
  return {
    pass: actual.startsWith(prefix),
    expectedHint: "Expected to start with:",
    expected: prefix,
  };
}

export { toStartWith };
