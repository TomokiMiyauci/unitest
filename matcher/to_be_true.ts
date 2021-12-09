// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isTrue } from "../deps.ts";

/** Use `.toBeTrue` when checking a value is `true`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeTrue,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeTrue,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is true", () => {
 *   expect(true).toBeTrue();
 *   expect(false).not.toBeTrue();
 * });
 * ```
 */
function toBeTrue(actual: unknown): MatchResult {
  return {
    pass: isTrue(actual),
    expected: true,
  };
}

export { toBeTrue };
