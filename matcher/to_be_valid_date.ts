// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isValidDate } from "../deps.ts";

/** Use `.toBeValidDate` when check that a `Date` is valid
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeValidDate,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeValidDate,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when Date is valid", () => {
 *   expect(new Date("01/01/2018")).toBeValidDate();
 *   expect(new Date("01/90/2018")).not.toBeValidDate();
 *   expect(new Date("invalid")).not.toBeValidDate();
 * });
 * ```
 */
function toBeValidDate(actual: Date): MatchResult {
  return {
    pass: isValidDate(actual),
    expected: "valid date",
  };
}

export { toBeValidDate };
