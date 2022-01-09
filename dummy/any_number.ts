// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isNumber } from "../deps.ts";
import { equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

/** Whether argument is any `number` or not. */
function isAnyNumber(value: unknown): value is number | Number {
  return isNumber(value) || value instanceof Number;
}

/** equal to any Number */
class AnyNumber implements Equality {
  #condition;
  constructor(condition?: (value: number) => boolean) {
    this.#condition = condition;
  }

  /** equality logic called by equal function */
  [equality](actual: unknown): boolean {
    const isNum = isAnyNumber(actual);
    return this.#condition ? isNum && this.#condition(Number(actual)) : isNum;
  }

  /** display name */
  toString() {
    return "any number";
  }
}

/** matches any `number` or `Number`
 * ```ts
 * import {
 *   anyNumber,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any number", () => {
 *   expect(Infinity).toEqual(anyNumber());
 * });
 * ```
 */
function anyNumber(condition?: (value: number) => boolean): AnyNumber {
  return new AnyNumber(condition);
}

export { AnyNumber, anyNumber, isAnyNumber };
