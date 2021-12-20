// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { PreModifier } from "./types.ts";

/** Use `.number` to convert any `actual` to `number`. Internally, the `Number`
 * constructor is used.
 * ```ts
 * import {
 *   defineExpect,
 *   number,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     number,
 *   },
 * });
 *
 * test("passes when numberized value to be", () => {
 *   expect("").number.toBe(0);
 *   expect("test").number.toBe(NaN);
 * });
 * ```
 */
const number: PreModifier<unknown, { actual: number }> = {
  type: "pre",
  fn: (actual) => ({ actual: Number(actual) }),
};

export { number };
