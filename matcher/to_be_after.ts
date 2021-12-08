// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

/** Use `.toBeAfter` when checking if a date occurs after date
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeAfter,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeAfter,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when input is after date", () => {
 *   expect(new Date("01/01/2019")).toBeAfter(new Date("01/01/2018"));
 *   expect(new Date("01/01/2018")).not.toBeAfter(new Date("01/01/2019"));
 * });
 * ```
 */
function toBeAfter(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual > expected,
    expected,
    expectedHint: "Expected to be after:",
  };
}

export { toBeAfter };
