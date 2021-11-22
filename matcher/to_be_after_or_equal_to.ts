// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { stringify } from "./utils.ts";

function toBeAfterOrEqualTo(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual >= expected,
    expected: `Date to be after or equal to ${stringify(expected)}`,
  };
}

export { toBeAfterOrEqualTo };
