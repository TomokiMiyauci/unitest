// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import { isObject } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

/** equal to any `object` */
class AnyObject implements Equality {
  #condition;
  constructor(condition?: (value: object) => boolean) {
    this.#condition = condition;
  }
  /** equality logic called by equal function */
  [equality](actual: unknown): boolean {
    const isObj = isObject(actual);
    return this.#condition ? isObj && this.#condition(actual) : isObj;
  }

  /** display name */
  toString(): string {
    return "any object";
  }
}

/** matches any `object`.
 * ```ts
 * import {
 *   anyObject,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 * test("should be any object", () => {
 *   expect({a: "b"}).toEqual(anyObject());
 * });
 * ```
 */
function anyObject(condition?: (value: object) => boolean): AnyObject {
  return new AnyObject(condition);
}

export { AnyObject, anyObject };
