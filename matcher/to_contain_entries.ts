// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containAll } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toContainEntries` when checking if an object contains all of the provided
 * entries
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainEntries,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainEntries,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains all of the given entries", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainEntries([["a", "foo"]]);
 *   expect(object).toContainEntries([
 *     ["c", "baz"],
 *     ["a", "foo"],
 *   ]);
 *   expect(object).not.toContainEntries([
 *     ["b", "qux"],
 *     ["a", "foo"],
 *   ]);
 * });
 * ```
 */
function toContainEntries(
  actual: object,
  expected: [string, unknown][],
): MatchResult {
  const entries = Object.entries(actual);

  return {
    pass: containAll(entries, expected),
    actual: entries,
    actualHint: "Actual entries:",
    expected,
    expectedHint: "Expected to contain all:",
  };
}

export { toContainEntries };
