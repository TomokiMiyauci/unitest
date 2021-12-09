// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isFunction } from "../deps.ts";

/** Use `.toBeFunction` when checking if a value is a `Function`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeFunction,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeFunction,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a function", () => {
 *   expect(() => {}).toBeFunction();
 *   expect(function () {}).toBeFunction();
 *   expect(true).not.toBeFunction();
 * });
 * ```
 */
function toBeFunction(actual: unknown): MatchResult {
  return {
    pass: isFunction(actual),
    expected: "function",
  };
}

export { toBeFunction };
