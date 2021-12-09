// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isObject } from "../deps.ts";
import { equal } from "../helper/equal.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toContainEqual` */
function predict(
  actual: Record<PropertyKey, unknown>,
  expected: Record<PropertyKey, unknown>,
): boolean {
  return Object.entries(expected).every(([expKey, expValue]) => {
    return Object.entries(actual).some(([actKey, actValue]) => {
      const isObjectExp = isObject(expValue);
      const isObjectAct = isObject(actValue);
      if (isObjectExp || isObjectAct) {
        if (!!isObjectExp && !!isObjectAct) {
          return predict(
            actValue as Record<PropertyKey, unknown>,
            expValue as Record<PropertyKey, unknown>,
          );
        }
        return false;
      }

      return equal(expKey, actKey) && equal(expValue, actValue);
    });
  });
}

/** Use `.toContainEqual` when you want to check that an item with a specific
 * structure and values is contained in an array
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when array contains given value", () => {
 *   expect({ a: "foo", b: "bar" }).toContainEqual({ a: "foo" });
 *   expect({ a: "foo", b: "bar" }).not.toContainEqual({ c: "hoo" });
 * });
 * ```
 */
function toContainEqual(
  actual: Record<PropertyKey, unknown>,
  expected: Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { predict, toContainEqual };
