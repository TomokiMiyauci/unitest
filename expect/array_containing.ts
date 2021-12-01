// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import { containAll } from "../matcher/utils.ts";
import type { Equality } from "../helper/equal.ts";

/** equal to contain all values */
class ArrayContaining implements Equality {
  constructor(private expected: unknown[]) {}

  [equality](actual: unknown): boolean {
    if (!Array.isArray(actual)) {
      throw TypeError("Actual must be array");
    }

    return containAll(actual, this.expected);
  }

  toString(): string {
    return "array contain";
  }
}

/** make `ArrayContaining` */
function arrayContaining(expected: unknown[]): ArrayContaining {
  return new ArrayContaining(expected);
}

export { ArrayContaining, arrayContaining };
