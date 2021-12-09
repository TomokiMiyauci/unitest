// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { stringify } from "../helper/format.ts";

/** Use `.toBeBetween` when checking if a date equals or occurs after `startDate`
 * and equals or occurs before `endDate`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeBetween,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeBetween,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when input is in given date range", () => {
 *   expect(new Date("05/01/2019")).toBeBetween(
 *     new Date("01/01/2019"),
 *     new Date("10/01/2019"),
 *   );
 *   expect(new Date("05/01/2019")).toBeBetween(
 *     new Date("05/01/2019"),
 *     new Date("10/01/2019"),
 *   );
 *   expect(new Date("01/01/2019")).not.toBeBetween(
 *     new Date("05/01/2019"),
 *     new Date("10/01/2019"),
 *   );
 * });
 * ```
 */
function toBeBetween(
  actual: Date,
  startDate: Date,
  endDate: Date,
): MatchResult {
  return {
    pass: startDate <= actual && actual <= endDate,
    expected: `${stringify(startDate)} <= Actual <= ${stringify(endDate)}`,
  };
}

export { toBeBetween };
