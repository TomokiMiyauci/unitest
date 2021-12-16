// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";

/** Use `.toBeAnything` when checking if a value is not `null` and `undefined`.
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeAnything,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeAnything,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is not null", () => {
 *   expect(0).toBeAnything();
 *   expect(null).not.toBeAnything();
 *   expect(undefined).not.toBeAnything();
 * });
 * ```
 */
function toBeAnything(actual: unknown): MatchResult {
  return {
    pass: !isNil(actual),
    expected: "All except null and undefined",
  };
}

export { toBeAnything };
