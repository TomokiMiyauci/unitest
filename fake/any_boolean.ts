// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equality } from "../helper/equal.ts";
import { isBoolean } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

function isAnyBoolean(value: unknown): value is boolean | Boolean {
  return isBoolean(value) || value instanceof Boolean;
}

class AnyBoolean implements Equality {
  [equality](actual: unknown): boolean {
    return isAnyBoolean(actual);
  }

  toString(): string {
    return "any boolean";
  }
}

/** matches any `boolean` or `Boolean`
 * ```ts
 * import {
 *   anyBoolean,
 *   expect,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any boolean", () => {
 *   expect(new Boolean(false)).toEqual(anyBoolean());
 * });
 * ```
 */
function anyBoolean(): AnyBoolean {
  return new AnyBoolean();
}

export { AnyBoolean, anyBoolean, isAnyBoolean };
