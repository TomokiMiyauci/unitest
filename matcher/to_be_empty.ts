// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction, isLength0, isNil } from "../deps.ts";
import type { MatchResult } from "./types.ts";

function isIterable<T>(value: unknown): value is Iterable<T> {
  if (isNil(value)) {
    return false;
  }

  return isFunction((value as any)[Symbol.iterator]);
}

function isEmpty<T>(
  value: Iterable<T> | Record<PropertyKey, unknown>,
): boolean {
  const iterable = isIterable(value);

  if (iterable) {
    const { done } = value[Symbol.iterator]().next();
    return done ?? false;
  } else {
    // check {} or not
    return isLength0(Object.keys(value)) &&
      isLength0(Object.getOwnPropertySymbols(value));
  }
}

function toBeEmpty<T>(
  actual: Iterable<T> | Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: isEmpty(actual),
    expected: "empty",
  };
}

export { isEmpty, isIterable, toBeEmpty };
