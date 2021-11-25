// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeGreaterThanOrEqual(
  actual: number | bigint,
  expected: number | bigint,
): MatchResult {
  return {
    pass: Number(actual) >= expected,
    expected,
  };
}

export { toBeGreaterThanOrEqual };
