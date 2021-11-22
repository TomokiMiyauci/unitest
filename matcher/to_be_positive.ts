// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isPositiveNumber } from "../deps.ts";

function toBePositive(actual: number): MatchResult {
  return {
    pass: isPositiveNumber(actual),
    expected: "positive number",
  };
}

export { toBePositive };
