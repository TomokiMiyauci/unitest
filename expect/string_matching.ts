// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equality } from "../helper/equal.ts";
import { isString } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

class StringMatching implements Equality {
  private expected: RegExp;
  constructor(expected: string | RegExp) {
    this.expected = new RegExp(expected);
  }

  [equality](actual: unknown): boolean {
    if (!isString(actual)) {
      throw TypeError("Actual must be string");
    }

    return this.expected.test(actual);
  }

  toString(): string {
    return "string matching";
  }
}

/** matches `string` or regular expression
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
 * test("should be match pattern", () => {
 *   expect("hello! This is a good day.").toEqual(stringMatching(/good/));
 * });
 * ```
 */
function stringMatching(expected: string | RegExp): StringMatching {
  return new StringMatching(expected);
}

export { StringMatching, stringMatching };
