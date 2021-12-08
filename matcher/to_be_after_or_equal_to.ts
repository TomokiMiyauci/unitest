// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

/** Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after
 * `date`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeAfterOrEqualTo,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeAfterOrEqualTo,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when input is equal to or after date", () => {
 *   expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2018"));
 *   expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2019"));
 *   xpect(new Date("01/01/2019")).not.toBeAfterOrEqualTo(new Date("01/01/2020"));
 * });
 * ```
 */
function toBeAfterOrEqualTo(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual >= expected,
    expectedHint: "Expected date to be after or equal to:",
    expected,
  };
}

export { toBeAfterOrEqualTo };
