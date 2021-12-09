// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isBoolean } from "../deps.ts";

/** Use `.toBeBoolean` when checking if a value is a `boolean`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeBoolean,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeBoolean,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a boolean", () => {
 *   expect(false).toBeBoolean();
 *   expect(true).toBeBoolean();
 *   expect(1 === 1).toBeBoolean();
 *   expect(1).not.toBeBoolean();
 * });
 * ```
 */
function toBeBoolean(actual: unknown): MatchResult {
  return {
    pass: isBoolean(actual),
    expected: "boolean",
  };
}

export { toBeBoolean };
