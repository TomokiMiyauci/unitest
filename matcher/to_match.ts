// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";

/** predict for `toMatch` */
function predict(actual: string, expected: string | RegExp): boolean {
  if (isString(expected)) return actual.includes(expected);

  return expected.test(actual);
}

/** Use `.toMatch` to check that a `string` matches a regular expression
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value match string or regExp", () => {
 *   expect("hello world").toMatch(/^hello/);
 * });
 * ```
 */
function toMatch(actual: string, expected: string | RegExp): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toMatch };
