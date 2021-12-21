// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import { isFunction } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

/** Whatever argument is `function` or not. */
function isAnyFunction(value: unknown): value is Function {
  return isFunction(value) || value instanceof Function;
}

/** Object have asymmetric matcher for `function`  */
class AnyFunction implements Equality {
  [equality](actual: unknown): boolean {
    return isAnyFunction(actual);
  }

  toString() {
    return "any function";
  }
}

/** `anyFunction()` matches any `function`.
 * ```ts
 * import {
 *   anyFunction,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any function", () => {
 *   expect(() => {}).toEqual(anyFunction());
 * });
 * ```
 */
function anyFunction(): AnyFunction {
  return new AnyFunction();
}

export { AnyFunction, anyFunction, isAnyFunction };
