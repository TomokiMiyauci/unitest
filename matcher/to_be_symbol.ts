// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isSymbol } from "../deps.ts";

function toBeSymbol(actual: unknown): MatchResult {
  return {
    pass: isSymbol(actual),
    expected: "symbol",
  };
}

export { toBeSymbol };
