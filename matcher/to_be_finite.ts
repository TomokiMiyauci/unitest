// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeFinite(actual: unknown): MatchResult {
  return {
    pass: Number.isFinite(actual),
    expected: "finite number",
  };
}

export { toBeFinite };
