// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isObject } from "../deps.ts";

/** Use `.toBeObject` when checking if a value is an `Object`
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeObject,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeObject,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when value is an object", () => {
 *   expect({}).toBeObject();
 *   expect({ a: "hello" }).toBeObject();
 *   expect(true).not.toBeObject();
 * });
 * ```
 */
function toBeObject(actual: unknown): MatchResult {
  return {
    pass: isObject(actual),
    expected: "object",
  };
}

export { toBeObject };
