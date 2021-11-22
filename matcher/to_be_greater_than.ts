// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeGreaterThan(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: Number(actual) > expected,
    expected,
  };
}

export { toBeGreaterThan };
