// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isEven } from "../deps.ts";

function toBeEven(actual: number): MatchResult {
  return {
    pass: isEven(actual),
    expected: "even",
  };
}

export { toBeEven };
