// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeFinite(actual: unknown): MatchResult {
  return {
    pass: Number.isFinite(actual),
    expected: "finite number",
  };
}

export { toBeFinite };
