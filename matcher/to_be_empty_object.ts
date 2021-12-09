// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isEmptyObject } from "../deps.ts";

/** Use `.toBeEmptyObject` when checking if a value is an empty Object
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeEmptyObject,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeEmptyObject,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an empty object", () => {
 *   expect({}).toBeEmptyObject();
 *   expect([]).toBeEmptyObject();
 *   expect({ a: "hello" }).not.toBeEmptyObject();
 * });
 * ```
 */
function toBeEmptyObject(actual: object): MatchResult {
  return {
    pass: isEmptyObject(actual),
    expected: "empty object",
  };
}

export { toBeEmptyObject };
