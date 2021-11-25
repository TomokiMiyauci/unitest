// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";

function toBeString(actual: unknown): MatchResult {
  return {
    pass: isString(actual),
    expected: "string",
  };
}

export { toBeString };
