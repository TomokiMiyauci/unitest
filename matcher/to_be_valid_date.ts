// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isValidDate } from "../deps.ts";

function toBeValidDate(actual: Date): MatchResult {
  return {
    pass: isValidDate(actual),
    expected: "valid date",
  };
}

export { toBeValidDate };
