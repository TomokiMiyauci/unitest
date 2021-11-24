// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isNumber } from "../deps.ts";

function toBeNumber(actual: unknown): MatchResult {
  return {
    pass: isNumber(actual),
    expected: "number",
  };
}

export { toBeNumber };
