// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { AnyFn } from "../_types.ts";
import { isError, isUndefined } from "../deps.ts";

function predict(actual: AnyFn) {
  let hasError = false;
  let e;

  try {
    actual();
  } catch (_e) {
    hasError = true;
    e = _e;
  }

  return {
    hasError,
    e,
  };
}

function toThrow(actual: AnyFn, expected?: string | RegExp): MatchResult {
  const { hasError, e } = predict(actual);

  const pass = hasError &&
    ((isUndefined(expected)) || (isError(e) && !!e.message.match(expected)) ||
      e === expected);

  return {
    pass,
    expected,
  };
}

export { predict, toThrow };
