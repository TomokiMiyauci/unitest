// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isDate } from "../deps.ts";

/** Use `.toBeDate` when checking if a value is a Date
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeDate,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeDate,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a date", () => {
 *   expect(new Date("01/01/2018")).toBeDate();
 *   expect("01/01/2018").not.toBeDate();
 *   expect(undefined).not.toBeDate();
 * });
 * ```
 */
function toBeDate(actual: unknown): MatchResult {
  return {
    pass: isDate(actual),
    expected: "date",
  };
}

export { toBeDate };
