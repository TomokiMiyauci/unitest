// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal as eq, isObject } from "../deps.ts";

/** Symbol for equality */
const equality = Symbol.for("equality");

interface Equality {
  [equality]: (actual: unknown) => boolean;
  toString: () => string;
}

/** Whatever argument is `Equality` or not */
function isEquality(value: object): value is Equality {
  return equality in value;
}

/** safe stringify for `Equality` */
function stringifyEquality<T>(value: T): T | string {
  if (isObject(value) && isEquality(value)) {
    return value.toString();
  }

  return value;
}

/** Deep equality comparison used in assertions */
function equal(
  a: unknown,
  b: unknown,
): boolean {
  if (isObject(b) && isEquality(b)) {
    return b[equality](a);
  }
  return eq(a, b);
}

export { equal, equality, isEquality, stringifyEquality };
export type { Equality };
