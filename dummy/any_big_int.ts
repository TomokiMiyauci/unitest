// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

/** Whether argument is `bigint` or not.
 * ```ts
 * isBigInt(1n) // true
 * ```
 */
function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}

/** Whether argument is `bigint` or `BigInt` or not.
 * ```ts
 * isAnyBigInt(BigInt(1)) // true
 * ```
 */
function isAnyBigInt(value: unknown): value is bigint | BigInt {
  return isBigInt(value) || value instanceof BigInt;
}

/** equal to any BigInt */
class AnyBigInt implements Equality {
  /** equality logic called by equal function */
  [equality](actual: unknown): boolean {
    return isAnyBigInt(actual);
  }

  /** display name */
  toString(): string {
    return "any bigint";
  }
}

/** matches any `bigint` or `BigInt`
 * ```ts
 * import {
 *   anyBigInt,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any boolean", () => {
 *   expect(new Boolean(false)).toEqual(anyBoolean());
 * });
 * ```
 */
function anyBigInt(): AnyBigInt {
  return new AnyBigInt();
}

export { AnyBigInt, anyBigInt, isAnyBigInt, isBigInt };
