// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "../deps.ts";
import type { Primitive } from "../_types.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toContain` */
function predict(actual: Iterable<unknown>, expected: Primitive): boolean {
  if (isString(actual)) {
    if (!isString(expected)) return false;
    return actual.includes(expected);
  }

  const iterable = [...actual];

  return iterable.includes(expected);
}

/** Use `.toContain` when you want to check that an item is in an array
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when array contains given value", () => {
 *   expect([1, 2, 3, 4, 5]).toContain(3);
 *   expect([{}, [], ""]).not.toContain(3);
 * });
 * ```
 */
function toContain(
  actual: Iterable<unknown>,
  expected: Primitive,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to contain:",
  };
}

export { predict, toContain };
