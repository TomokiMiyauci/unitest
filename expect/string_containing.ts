// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equality } from "../helper/equal.ts";
import { isString } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

class StringContaining implements Equality {
  constructor(private expected: string) {}

  [equality](actual: unknown): boolean {
    if (!isString(actual)) {
      throw TypeError("Actual must be string");
    }

    return actual.includes(this.expected);
  }

  toString(): string {
    return "string containing";
  }
}

/** matches if `string` contains
 *
 * You should actual value is `string`
 * ```ts
 * import {
 *   any,
 *   expect,
 *   stringMatching,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should contain pattern", () => {
 *   expect("hello! This is a good day.").toEqual(stringMatching("good"));
 * });
 * ```
 */
function stringContaining(expected: string): StringContaining {
  return new StringContaining(expected);
}

export { StringContaining, stringContaining };
