// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { equal } from "../helper/equal.ts";
import { MatchResult } from "./types.ts";

/** Use `.toEqual` to compare recursively all properties of object instances
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when array contains given value", () => {
 *   expect({}).toEqual({});
 * });
 * ```
 */
function toEqual(actual: unknown, expected: unknown): MatchResult {
  return {
    pass: equal(actual, expected),
    expected,
  };
}

export { toEqual };
