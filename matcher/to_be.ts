// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
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
