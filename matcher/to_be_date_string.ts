// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isDateString } from "../deps.ts";

import type { MatchResult } from "./types.ts";

/** Use `.toBeDateString` when checking if a value is a valid date string
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeDateString,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeDateString,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a valid toBeDateString", () => {
 *   expect("2019-11-27T14:05:07.520Z").toBeDateString();
 *   expect("11/12/21").toBeDateString();
 *   expect("not a date").not.toBeDateString();
 * });
 * ```
 */
function toBeDateString(actual: string): MatchResult {
  return {
    pass: isDateString(actual),
    expected: "date string",
  };
}

export { toBeDateString };
