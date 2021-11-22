// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isSymbol } from "../deps.ts";

function toBeSymbol(actual: unknown): MatchResult {
  return {
    pass: isSymbol(actual),
    expected: "symbol",
  };
}

export { toBeSymbol };
