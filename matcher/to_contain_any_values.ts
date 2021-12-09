// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { containSome } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toContainAnyValues` when checking if an object contains at least one of
the provided values
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainAnyValues,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainAnyValues,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains at least one of the given values", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainAnyValues(["qux", "foo"]);
 *   expect(object).toContainAnyValues(["qux", "baz"]);
 *   expect(object).not.toContainAnyValues(["qux"]);
 * });
 * ```
 */
function toContainAnyValues(
  actual: object,
  expected: readonly unknown[],
): MatchResult {
  const actualValue = Object.values(actual);

  return {
    pass: containSome(actualValue, expected),
    actual: actualValue,
    actualHint: "Actual values:",
    expected,
    expectedHint: "Expected to contain any of values:",
  };
}

export { toContainAnyValues };
