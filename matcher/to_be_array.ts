// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeArray(actual: unknown): MatchResult {
  return {
    pass: Array.isArray(actual),
    expected: "Array",
  };
}

export { toBeArray };
