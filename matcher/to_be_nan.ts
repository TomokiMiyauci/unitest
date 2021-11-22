// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeNaN(actual: unknown): MatchResult {
  return {
    pass: Number.isNaN(actual),
    expected: NaN,
  };
}

export { toBeNaN };
