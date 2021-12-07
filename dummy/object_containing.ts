// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal, equality } from "../helper/equal.ts";
import { isObject } from "../deps.ts";
import { has, prop } from "../matcher/utils.ts";
import type { Equality } from "../helper/equal.ts";

// TODO: dirty code
function containRecord(a: object, b: Record<PropertyKey, unknown>): boolean {
  let result = true;

  for (const property in b) {
    if (
      !has(property, a) ||
      !equal(prop(property, a), b[property])
    ) {
      result = false;
      break;
    }
  }
  return result;
}

/** matches any received object that recursively matches the expected properties */
class ObjectContaining implements Equality {
  constructor(private expected: Record<PropertyKey, unknown>) {}

  [equality](actual: unknown): boolean {
    if (!isObject(actual)) {
      throw TypeError("Actual must be object");
    }

    return containRecord(actual, this.expected);
  }

  toString() {
    return "object contain";
  }
}

/** matches any received object that recursively matches the expected properties
 * ```ts
 * import {
 *   any,
 *   expect,
 *   objectContaining,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be any number", () => {
 *   expect({
 *     name: "Bob",
 *     score: 100,
 *   }).toEqual({
 *     name: any(String),
 *     score: any(Number),
 *   });
 * });
 * ```
 */
function objectContaining(
  object: Record<PropertyKey, unknown>,
): ObjectContaining {
  return new ObjectContaining(object);
}

export { containRecord, ObjectContaining, objectContaining };
