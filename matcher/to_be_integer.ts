// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeInteger(actual: unknown): MatchResult {
  return {
    pass: Number.isInteger(actual),
    expected: "integer",
  };
}

export { toBeInteger };
