// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equality } from "../helper/equal.ts";
import { contains } from "../matcher/utils.ts";
import type { Equality } from "../helper/equal.ts";

class AnyOf implements Equality {
  constructor(private expected: readonly unknown[]) {}
  [equality](actual: unknown): boolean {
    return contains(this.expected, actual);
  }

  toString(): string {
    return `any of`;
  }
}

/** matches any of expected value
 * ```ts
 * import {
 *   anyOf,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any of 1, 2, 3", () => {
 *   expect(3).toEqual(anyOf([1, 2, 3]));
 * });
 * ```
 */
function anyOf(expected: readonly unknown[]): AnyOf {
  return new AnyOf(expected);
}

export { AnyOf, anyOf };
