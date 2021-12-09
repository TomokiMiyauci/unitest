// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { has } from "./utils.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toContainAnyKeys` */
function predict(actual: object, expected: PropertyKey[]): boolean {
  return expected.some((value) => has(value, actual));
}

/** Use `.toContainAnyKeys` when checking if an object contains at least one of the
 * provided keys
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainAnyKeys,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainAnyKeys,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains at least one matching key", () => {
 *   const object = { a: "hello", b: "world" };
 *   expect(object).toContainAnyKeys(["a"]);
 *   expect(object).toContainAnyKeys(["b", "c"]);
 *   expect(object).not.toContainAnyKeys(["c"]);
 * });
 * ```
 */
function toContainAnyKeys(
  actual: object,
  expected: PropertyKey[],
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to contain any of keys:",
    actualHint: "Actual keys:",
    actual: [
      ...Object.keys(actual),
      ...Object.getOwnPropertySymbols(actual),
    ],
  };
}

export { predict, toContainAnyKeys };
