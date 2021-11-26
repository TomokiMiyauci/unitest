// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function predict(
  actual: string,
  substring: string,
  times: number,
): boolean {
  return (actual.match(new RegExp(substring, "g")) || []).length === times;
}

function toIncludeRepeated(
  actual: string,
  substring: string,
  times: number,
): MatchResult {
  return {
    pass: predict(actual, substring, times),
    expected: substring,
    expectedHint: `Expected to include repeated ${times} times`,
  };
}

export { predict, toIncludeRepeated };
