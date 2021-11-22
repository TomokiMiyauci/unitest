// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

type ContainIterable = { includes: (search: any) => boolean };

function predict(actual: ContainIterable, expected: unknown): boolean {
  return actual.includes(expected);
}

function toContain(
  actual: ContainIterable,
  expected: unknown,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toContain };
export type { ContainIterable };
