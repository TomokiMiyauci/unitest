// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";

/** Use `.toBeNil` when checking a value is `null` or `undefined`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeNil,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeNil,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is null or undefined", () => {
 *   expect(null).toBeNil();
 *   expect(undefined).toBeNil();
 *   expect(true).not.toBeNil();
 * });
 * ```
 */
function toBeNil(actual: unknown): MatchResult {
  return {
    pass: isNil(actual),
    expected: "null or undefined",
  };
}

export { toBeNil };
