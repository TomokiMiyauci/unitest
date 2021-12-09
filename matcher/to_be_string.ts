// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";

/** Use `.toBeString` when checking if a value is a `string`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeString,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeString,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is a string", () => {
 *   expect("").toBeString();
 *   expect("hello").toBeString();
 *   expect(new String("hello")).not.toBeString();
 * });
 * ```
 */
function toBeString(actual: unknown): MatchResult {
  return {
    pass: isString(actual),
    expected: "string",
  };
}

export { toBeString };
