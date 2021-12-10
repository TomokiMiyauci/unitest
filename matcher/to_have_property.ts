// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";
import { hasPath, propPath } from "./utils.ts";
import { stringify } from "../helper/format.ts";
import { equal } from "../helper/equal.ts";

function constructPath(keyPath: PropertyKey | PropertyKey[]): PropertyKey[] {
  return Array.isArray(keyPath)
    ? keyPath
    : isString(keyPath)
    ? keyPath.split(".")
    : [keyPath];
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

/** assertion hint */
function _hint(value: unknown): string {
  return value ? "path -> value" : "path";
}

/** assert hint message */
function _assetHint(value: unknown, returnValue: unknown): string {
  return value ? ` -> ${stringify(returnValue)}` : "";
}

/** Use `.toHaveProperty` to check if property at provided reference keyPath exists
 * for an `object`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when check object property via keyPath", () => {
 *   expect({ a: "b" }).toHaveProperty("a");
 *   expect({ a: { b: { c: "d" } } }).toHaveProperty("a.b.c");
 *   expect({ a: { b: { c: "d" } } }).not.toHaveProperty(["a", "b", "c"], "e");
 * });
 * ```
 */
function toHaveProperty(
  actual: object,
  keyPath: PropertyKey | PropertyKey[],
  value?: unknown,
): MatchResult {
  const expectedPath = constructPath(keyPath);
  const actualPath = extractPath(expectedPath, actual);
  const expectedValue = propPath(expectedPath, actual);
  const actualValue = propPath(actualPath, actual);

  const hasValue = arguments.length === 3;

  const pass = hasValue
    ? equal(expectedValue, value)
    : hasPath(expectedPath, actual);
  const msg = _hint(hasValue);

  const act = `${actualPath.join(".")}${_assetHint(hasValue, actualValue)}`;
  const expected = `${expectedPath.join(".")}${_assetHint(hasValue, value)}`;

  return {
    pass,
    actualHint: `Actual ${msg}:`,
    actual: act,
    expectedHint: `Expected ${msg}:`,
    expected,
  };
}

export { _assetHint, _hint, constructPath, extractPath, toHaveProperty };
