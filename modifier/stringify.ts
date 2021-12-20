// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { PreModifier } from "./types.ts";

/** Use `.stringify` to convert any `actual` to `string`. Internally, the String
 * constructor is used.
 * ```ts
 * import {
 *   defineExpect,
 *   stringify,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *   },
 *   modifierMap: {
 *     stringify,
 *   },
 * });
 *
 * test("passes when stringified value to be", () => {
 *   expect(null).stringify.toBe("null");
 * });
 * ```
 */
const stringify: PreModifier<unknown, { actual: string }> = {
  type: "pre",
  fn: (actual) => ({ actual: String(actual) }),
};

export { stringify };
