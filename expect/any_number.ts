// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isNumber } from "../deps.ts";
import { equality } from "../helper/equal.ts";
import type { Equality } from "../helper/equal.ts";

function isAnyNumber(value: unknown): value is number | Number {
  return isNumber(value) || value instanceof Number;
}

class AnyNumber implements Equality {
  [equality](actual: unknown): boolean {
    return isAnyNumber(actual);
  }

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
```
 */
function anyNumber(): AnyNumber {
  return new AnyNumber();
}

export { AnyNumber, anyNumber, isAnyNumber };
