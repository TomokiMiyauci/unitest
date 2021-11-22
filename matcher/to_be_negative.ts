// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isNegativeNumber } from "../deps.ts";

function toBeNegative(actual: number): MatchResult {
  return {
    pass: isNegativeNumber(actual),
    expected: "negative number",
  };
}

export { toBeNegative };
