// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isOdd } from "../deps.ts";

function toBeOdd(actual: number): MatchResult {
  return {
    pass: isOdd(actual),
    expected: "odd",
  };
}

export { toBeOdd };
