// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toContainAnyEntries` when checking if an object contains at least one of
 * the provided entries
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainAnyEntries,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainAnyEntries,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains at least one of the given entries", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainAnyEntries([
 *     ["a", "qux"],
 *     ["a", "foo"],
 *   ]);
 *   expect(object).toContainAnyEntries([
 *     ["a", "qux"],
 *     ["b", "bar"],
 *   ]);
 *   expect(object).not.toContainAnyEntries([["d", "qux"]]);
 * });
 * ```
 */
function toContainAnyEntries(
  actual: object,
  expected: [string, unknown][],
): MatchResult {
  const entries = Object.entries(actual);
  return {
    pass: containSome(entries, expected),
    actual: Object.entries(actual),
    actualHint: "Actual entries:",
    expected,
    expectedHint: "Expected to contain any of:",
  };
}

export { toContainAnyEntries };
