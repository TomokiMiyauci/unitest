// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "../deps.ts";
import type { Primitive } from "../_types.ts";
import type { MatchResult } from "./types.ts";

function predict(actual: Iterable<unknown>, expected: Primitive): boolean {
  if (isString(actual)) {
    if (!isString(expected)) return false;
    return actual.includes(expected);
  }

  const iterable = [...actual];

  return iterable.includes(expected);
}

function toContain(
  actual: Iterable<unknown>,
  expected: Primitive,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to contain:",
  };
}

export { predict, toContain };
