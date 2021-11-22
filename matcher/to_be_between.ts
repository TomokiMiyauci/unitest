// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { stringify } from "./utils.ts";

function toBeBetween(
  actual: Date,
  startDate: Date,
  endDate: Date,
): MatchResult {
  return {
    pass: actual >= startDate && actual <= endDate,
    expected: `Date to be between ${stringify(startDate)} and ${endDate}`,
  };
}

export { toBeBetween };
