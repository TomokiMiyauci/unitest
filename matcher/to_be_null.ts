// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isNull } from "../deps.ts";

function toBeNull(actual: unknown): MatchResult {
  return {
    pass: isNull(actual),
    expected: null,
  };
}

export { toBeNull };
