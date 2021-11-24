// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
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
