// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toIncludeSameMembers` */
function predict(
  actual: readonly unknown[],
  expected: readonly unknown[],
): boolean {
  if (actual.length !== expected.length) {
    return false;
  }

  const _actual = [...actual];

  return expected.every((value) =>
    _actual.some((_value, i) => {
      if (equal(value, _value)) {
        _actual.splice(i, 1);
        return true;
      }
      return false;
    })
  );
}

/** Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in
 * any order
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toIncludeSameMembers,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toIncludeSameMembers,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when arrays match in a different order", () => {
 *   expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
 *   expect([{ foo: "bar" }, { baz: "qux" }]).toIncludeSameMembers([
 *     { baz: "qux" },
 *     { foo: "bar" },
 *   ]);
 * });
 * ```
 */
function toIncludeSameMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to include all and of the same size:",
  };
}

export { predict, toIncludeSameMembers };
