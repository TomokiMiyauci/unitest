// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import { isSymbol } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

/** Whether argument is any `symbol` not.
 * ```
 */
function isAnySymbol(value: unknown): value is symbol | Symbol {
  return isSymbol(value) || value instanceof Symbol;
}

/** equal to any BigInt */
class AnySymbol implements Equality {
  /** equality logic called by equal function */
  [equality](actual: unknown): boolean {
    return isAnySymbol(actual);
  }

  /** display name */
  toString(): string {
    return "any symbol";
  }
}

/** matches any `symbol` or `Symbol`
 * ```ts
 * import {
 *   anySymbol,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any symbol", () => {
 *   expect(Symbol.for("symbol")).toEqual(anySymbol());
 * });
 * ```
 */
function anySymbol(): AnySymbol {
  return new AnySymbol();
}

export { AnySymbol, anySymbol, isAnySymbol };
