// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "../deps.ts";
import { equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

function isAnyString(value: unknown): value is string | String {
  return isString(value) || value instanceof String;
}

class AnyString implements Equality {
  [equality](actual: unknown): boolean {
    return isAnyString(actual);
  }

  toString() {
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
function anyString(): AnyString {
  return new AnyString();
}

export { AnyString, anyString, isAnyString };
