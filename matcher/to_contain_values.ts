// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containAll } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toContainValues` when checking if an object contains all of the provided
 * values
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainValues,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainValues,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains all of the given values", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainValues(["foo"]);
 *   expect(object).toContainValues(["baz", "bar"]);
 *   expect(object).not.toContainValues(["qux", "foo"]);
 * });
 * ```
 */
function toContainValues(
  actual: object,
  expected: readonly unknown[],
): MatchResult {
  const values = Object.values(actual);

  return {
    pass: containAll(values, expected),
    resultActual: values,
    actualHint: "Actual values:",
    expected,
    expectedHint: "Expected to contain all:",
  };
}

export { toContainValues };
