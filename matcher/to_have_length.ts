// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function predict(actual: unknown, expected: number): boolean {
  return (actual as any)?.length === expected;
}

function toHaveLength(actual: unknown, expected: number): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toHaveLength };
