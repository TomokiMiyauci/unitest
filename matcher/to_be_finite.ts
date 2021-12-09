// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeFinite` when checking if a value is a `number`, not `NaN` or
 * `Infinity`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeFinite,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeFinite,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a finite number", () => {
 *   expect(1).toBeFinite();
 *   expect(Infinity).not.toBeFinite();
 *   expect(NaN).not.toBeFinite();
 * });
 * ```
 */
function toBeFinite(actual: unknown): MatchResult {
  return {
    pass: Number.isFinite(actual),
    expected: "finite number",
  };
}

export { toBeFinite };
