// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { stringify } from "./utils.ts";

function toBeBefore(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual < expected,
    expected: `Date to be before ${stringify(expected)}`,
  };
}

export { toBeBefore };
