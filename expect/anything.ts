// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equality } from "../helper/equal.ts";
import { isNil } from "../deps.ts";
import type { Equality } from "../helper/equal.ts";

/** equal to anything */
class Anything implements Equality {
  [equality](actual: unknown): boolean {
    return !isNil(actual);
  }

  toString(): string {
    return "except undefined or null";
  }
}

/** make Anything */
function anything(): Anything {
  return new Anything();
}

export { Anything, anything };
