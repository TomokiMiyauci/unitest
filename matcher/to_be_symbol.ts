// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isSymbol } from "../deps.ts";

/** Use `.toBeSymbol` when checking if a value is a `symbol`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeSymbol,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeSymbol,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a symbol", () => {
 *   expect(Symbol()).toBeSymbol();
 *   expect(true).not.toBeSymbol();
 * });
 * ```
 */
function toBeSymbol(actual: unknown): MatchResult {
  return {
    pass: isSymbol(actual),
    expected: "symbol",
  };
}

export { toBeSymbol };
