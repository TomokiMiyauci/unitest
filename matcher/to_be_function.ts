// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isFunction } from "../deps.ts";

function toBeFunction(actual: unknown): MatchResult {
  return {
    pass: isFunction(actual),
    expected: "function",
  };
}

export { toBeFunction };
