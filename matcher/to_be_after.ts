// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { stringify } from "../helper/format.ts";

function toBeAfter(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual > expected,
    expected: `Date to be after ${stringify(expected)}`,
  };
}

export { toBeAfter };
