// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isEmpty } from "../deps.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toBeEmpty` when checking if a String `''`, `Array` `[]`, `Object` `{}`, or
 * `Iterable` is empty
 * ```ts
 * import {
 *   defineExpect,
 *   test,
 *   toBeEmpty,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeEmpty,
 *   },
 * });
 *
 * test("passes when given an empty", () => {
 *   expect("").toBeEmpty();
 *   expect([]).toBeEmpty();
 *   expect({}).toBeEmpty();
 *   expect(new Map()).toBeEmpty();
 * });
 * ```
 */
function toBeEmpty<T>(
  actual: Iterable<T> | Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: isEmpty(actual),
    expected: "empty",
  };
}

export { toBeEmpty };
