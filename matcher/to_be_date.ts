// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isDate } from "../deps.ts";

function toBeDate(actual: unknown): MatchResult {
  return {
    pass: isDate(actual),
    expected: "date",
  };
}

export { toBeDate };
