// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate
 * function that returns a `boolean`.
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toSatisfy,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toSatisfy,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value passes given predicate", () => {
 *   const greaterThanOneButNotThree = (n: unknown) =>
 *     typeof n === "number" && n > 1 && n !== 3;
 *   expect(100).toSatisfy(greaterThanOneButNotThree);
 *   expect(0).not.toSatisfy(greaterThanOneButNotThree);
 *   expect(3).not.toSatisfy(greaterThanOneButNotThree);
 * });
 * ```
 */
function toSatisfy(
  actual: unknown,
  predicate: (actual: unknown) => boolean,
): MatchResult {
  return {
    pass: predicate(actual),
    expected: "Expected to satisfy predicate:",
  };
}

export { toSatisfy };
