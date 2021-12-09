// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeBefore` when checking if a date occurs before `date`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeBefore,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeBefore,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when input is before date", () => {
 *   expect(new Date("01/01/2018")).toBeBefore(new Date("01/01/2019"));
 *   expect(new Date("01/01/2019")).not.toBeBefore(new Date("01/01/2018"));
 * });
 * ```
 */
function toBeBefore(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual < expected,
    expected,
    expectedHint: "Expected to be before:",
  };
}

export { toBeBefore };
