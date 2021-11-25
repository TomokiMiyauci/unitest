// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isFalse } from "../deps.ts";

function toBeFalse(actual: unknown): MatchResult {
  return {
    pass: isFalse(actual),
    expected: false,
  };
}

export { toBeFalse };
