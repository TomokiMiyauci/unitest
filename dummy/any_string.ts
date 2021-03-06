// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "../deps.ts";
import { equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

/** Whether argument is any `string` or not. */
function isAnyString(value: unknown): value is string | String {
  return isString(value) || value instanceof String;
}

/** equal to any String */
class AnyString implements Equality {
  #condition;
  constructor(condition?: (value: string) => boolean) {
    this.#condition = condition;
  }
  /** equality logic called by equal function */
  [equality](actual: unknown): boolean {
    const isStr = isAnyString(actual);
    return this.#condition ? isStr && this.#condition(String(actual)) : isStr;
  }

  /** display name */
  toString(): string {
    return "any string";
  }
}

/** matches any `string` or `String`
 * ```ts
 * import {
 *   anyString,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any string", () => {
 *   expect("hello").toEqual(anyString());
 * });
 * ```
 */
function anyString(condition?: (value: string) => boolean): AnyString {
  return new AnyString(condition);
}

export { AnyString, anyString, isAnyString };
