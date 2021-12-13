// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { has, prop, symbolEntries } from "./utils.ts";
import { equal } from "../helper/equal.ts";
import { isObject } from "../deps.ts";
import type { MatchResult } from "./types.ts";

/** predict for `toMatchObject` */
function predict(a: object, b: Record<PropertyKey, unknown>): boolean {
  return [...Object.entries(b), ...symbolEntries(b)].every(([key, value]) => {
    if (!has(key, a)) return false;

    const aProp = prop(key, a);

    if (isObject(value) && isObject(aProp)) {
      return predict(aProp, value as Record<PropertyKey, unknown>);
    }
    return equal(aProp, value);
  });
}

// TODO:(miyauci) accept Iterable object
/** Use `.toMatchObject` to check that a `object` matches a subset of the properties
 * of an `object`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when object is part of subset", () => {
 *   expect({ foo: "bar", hello: "world" }).toMatchObject({ foo: "bar" });
 * });
 * ```
 */
function toMatchObject(
  actual: object,
  expected: Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toMatchObject };
