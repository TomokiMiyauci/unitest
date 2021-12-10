// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";
import { hasPath } from "./utils.ts";

type PredictResult = { result: boolean; path: PropertyKey[] };

/** predict for `toHaveProperty` */
function predict(
  actual: object,
  expected: PropertyKey | PropertyKey[],
): PredictResult {
  const path = Array.isArray(expected)
    ? expected
    : isString(expected)
    ? expected.split(".")
    : [expected];
  return { result: hasPath(path, actual), path };
}

/** extract property path */
function extractPath(keyPath: PropertyKey[], value: object): PropertyKey[] {
  const actualPath: PropertyKey[] = [];

  for (const key of keyPath) {
    if (!hasPath([...actualPath, key], value)) {
      break;
    }
    actualPath.push(key);
  }

  return actualPath;
}

/** Use `.toHaveProperty` to check if property at provided reference keyPath exists
 * for an `object`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when check object property via keyPath", () => {
 *   expect({ a: "b" }).toHaveProperty("a");
 *   expect({ a: { b: { c: "d" } } }).toHaveProperty("a.b.c");
 *   expect({ a: { b: { c: "d" } } }).toHaveProperty(["a", "b", "c"]);
 * });
 * ```
 */
function toHaveProperty(
  actual: object,
  expected: PropertyKey | PropertyKey[],
): MatchResult {
  // TODO:(miyauci) args for check object value
  const { result: pass, path } = predict(actual, expected);
  const actualPath = extractPath(path, actual);

  return {
    actualHint: "Actual path:",
    actual: actualPath.join("."),
    pass,
    expectedHint: "Expected path:",
    expected: path.join("."),
  };
}

export { extractPath, predict, toHaveProperty };
export type { PredictResult };
