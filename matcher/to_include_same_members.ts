// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal } from "../deps.ts";
import type { MatchResult } from "./types.ts";

function predict(
  actual: readonly unknown[],
  expected: readonly unknown[],
): boolean {
  if (actual.length !== expected.length) {
    return false;
  }

  const _actual = [...actual];

  return expected.every((value) =>
    _actual.some((_value, i) => {
      if (equal(value, _value)) {
        _actual.splice(i, 1);
        return true;
      }
      return false;
    })
  );
}

function toIncludeSameMembers(
  actual: readonly unknown[],
  expected: readonly unknown[],
): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
    expectedHint: "Expected to include all and of the same size",
  };
}

export { predict, toIncludeSameMembers };
