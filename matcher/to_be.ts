// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function predict(actual: unknown, expected: unknown): boolean {
  return Object.is(actual, expected);
}

function toBe(actual: unknown, expected: unknown): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toBe };
