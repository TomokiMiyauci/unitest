// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { bgYellow, black, bold } from "../deps.ts";
import type { PostModifier } from "./types.ts";

/** Use `.debug` to output debug info to console with `console.debug`.
 * ```ts
 * import {
 *   debug,
 *   defineExpect,
 *   jestExtendedMatcherMap,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should output debug info", () => {
 *   const expect = defineExpect({
 *     matcherMap: jestExtendedMatcherMap,
 *     modifierMap: {
 *       debug,
 *     },
 *   });
 *   expect("Deno").debug.toBeString();
 *
 *   // Output to console:
 *   // DEBUG { Context }
 * });
 * ```
 */
const debug: PostModifier = {
  type: "post",
  fn: (context) => {
    console.debug(`\n${bgYellow(black(bold(" DEBUG ")))}\n`, context);
    return {};
  },
};

export { debug };
