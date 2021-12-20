// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { contains } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toContainValue` when checking if an object contains the provided value
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainValue,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainValue,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains given value", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainValue("foo");
 *   expect(object).toContainValue("bar");
 *   expect(object).not.toContainValue("qux");
 * });
 * ```
 */
function toContainValue(actual: object, expected: unknown): MatchResult {
  const actualValue = Object.values(actual);
  return {
    pass: contains(actualValue, expected),
    resultActual: actualValue,
    actualHint: "Actual values:",
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { toContainValue };
