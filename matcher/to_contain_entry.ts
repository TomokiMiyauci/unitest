// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { has, prop } from "./utils.ts";
import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toContainEntry` */
function predict(
  actual: object,
  [key, value]: [PropertyKey, unknown],
): boolean {
  const _has = has(key, actual);
  return _has && equal(prop(key, actual), value);
}

/** Use `.toContainEntry` when checking if an object contains the provided entry
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainEntry,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainEntry,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains given entry", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainEntry(["a", "foo"]);
 *   expect(object).toContainEntry(["c", "baz"]);
 *   expect(object).not.toContainEntry(["a", "qux"]);
 * });
 * ```
 */
function toContainEntry(
  actual: object,
  expected: [PropertyKey, unknown],
): MatchResult {
  return {
    pass: predict(actual, expected),
    resultActual: Object.entries(actual),
    actualHint: "Actual entry:",
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { predict, toContainEntry };
