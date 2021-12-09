// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isNumber } from "../deps.ts";

/** Use `.toBeNumber` when checking if a value is a `number`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeNumber,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeNumber,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a number", () => {
 *   expect(1).toBeNumber();
 *   expect(NaN).toBeNumber();
 *   expect(Infinity).toBeNumber();
 *   expect(true).not.toBeNumber();
 * });
 * ```
 */
function toBeNumber(actual: unknown): MatchResult {
  return {
    pass: isNumber(actual),
    expected: "number",
  };
}

export { toBeNumber };
