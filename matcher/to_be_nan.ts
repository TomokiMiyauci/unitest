// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeNaN(actual: unknown): MatchResult {
  return {
    pass: Number.isNaN(actual),
    expected: NaN,
  };
}

export { toBeNaN };
