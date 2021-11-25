// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { stringify } from "../helper/format.ts";

function toBeBeforeOrEqualTo(actual: Date, expected: Date): MatchResult {
  return {
    pass: actual <= expected,
    expected: `Date to be before or equal to ${stringify(expected)}`,
  };
}

export { toBeBeforeOrEqualTo };
