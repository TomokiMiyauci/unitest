// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal, equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

function equalAnyArray(a: unknown, b?: unknown): boolean {
  const isArray = Array.isArray(a);

  if (!isArray) {
    return false;
  }
  if (b) {
    return a.every((act) => equal(act, b));
  } else {
    return true;
  }
}

class AnyArray implements Equality {
  constructor(private expected?: unknown) {}

  [equality](actual: unknown): boolean {
    return equalAnyArray(actual, this.expected);
  }

  toString(): string {
    return "any array";
  }
}

/** matches any `array` or any specific `array`
 * ```ts
 * import {
 *   anyArray,
 *   anyString,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any array", () => {
 *   expect({ students: ["Alice", "Bob", "John"] }).toEqual({
 *     students: anyArray(),
 *   });
 * });
 *
 * test("should be any string array", () => {
 *   expect({ students: ["Alice", "Bob", "John"] }).toEqual({
 *     students: anyArray(anyString()),
 *   });
 * });
 * ```
 */
function anyArray(expected?: unknown): AnyArray {
  return new AnyArray(expected);
}

export { AnyArray, anyArray, equalAnyArray };
