// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isNumber } from "../deps.ts";

function toBeNumber(actual: unknown): MatchResult {
  return {
    pass: isNumber(actual),
    expected: "number",
  };
}

export { toBeNumber };
