// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before
 * `date`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeBeforeOrEqualTo,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeBeforeOrEqualTo,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when input is equal to or before date", () => {
 *   expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2019"));
 *   expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2018"));
 *   expect(new Date("01/01/2019")).not.toBeBeforeOrEqualTo(
 *     new Date("01/01/2018"),
 *   );
 * });
 * ```
 */
function toBeBeforeOrEqualTo(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual <= expected,
    expected,
    expectedHint: "Expected to be before or equal to:",
  };
}

export { toBeBeforeOrEqualTo };
