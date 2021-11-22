// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isNull } from "../deps.ts";

function toBeNull(actual: unknown): MatchResult {
  return {
    pass: isNull(actual),
    expected: null,
  };
}

export { toBeNull };
