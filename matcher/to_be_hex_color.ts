// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isHexColor } from "../deps.ts";
import type { MatchResult } from "./types.ts";

/** Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeHexColor,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeHexColor,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a valid hex color", () => {
 *   expect("#abc123").toBeHexColor();
 *   expect("#FFF").toBeHexColor();
 *   expect("#000000").toBeHexColor();
 *   expect("#123ffg").not.toBeHexColor();
 * });
 * ```
 */
function toBeHexColor(actual: string): MatchResult {
  return {
    pass: isHexColor(actual),
    expected: "hex color of 3 or 6 digits",
  };
}

export { toBeHexColor };
