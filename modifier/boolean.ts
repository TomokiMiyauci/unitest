// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { PreModifier } from "./types.ts";

/** Use `.boolean` to convert any `actual` to `boolean`. Internally, the `Boolean`
 * constructor is used.
 * ```ts
 * import {
 *   defineExpect,
 *   boolean,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     boolean,
 *   },
 * });
 *
 * test("passes when booleanized value to be", () => {
 *   expect("").boolean.toBe(false);
 *   expect("test").boolean.toBe(true);
 * });
 * ```
 */
const boolean: PreModifier<unknown, { actual: boolean }> = {
  type: "pre",
  fn: (actual) => ({ actual: Boolean(actual) }),
};

export { boolean };
