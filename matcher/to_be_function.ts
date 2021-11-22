// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isFunction } from "../deps.ts";

function toBeFunction(actual: unknown): MatchResult {
  return {
    pass: isFunction(actual),
    expected: "function",
  };
}

export { toBeFunction };
