// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { has } from "./utils.ts";
import { isLength0 } from "../deps.ts";

type PredictResult = {
  result: boolean;
  noKeys: PropertyKey[];
};

/** predict for `toContainKeys` */
function predict(actual: object, expected: PropertyKey[]): PredictResult {
  const notExistsKeys = expected.filter((key) => !has(key, actual));

  return {
    result: isLength0(notExistsKeys),
    noKeys: notExistsKeys,
  };
}

/** Use `.toContainKeys` when checking if an object has all of the provided keys
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toContainKeys,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toContainKeys,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when object contains all keys", () => {
 *   const object = { a: "foo", b: "bar", c: "baz" };
 *   expect(object).toContainKeys(["a", "b"]);
 *   expect(object).toContainKeys(["b", "c"]);
 *   expect(object).not.toContainKeys(["d"]);
 * });
 * ```
 */
function toContainKeys(actual: object, expected: PropertyKey[]): MatchResult {
  const { result: pass, noKeys } = predict(actual, expected);
  return {
    pass,
    expected: `missing keys: ${noKeys.join(", ")}`,
  };
}

export { predict, toContainKeys };
export type { PredictResult };
