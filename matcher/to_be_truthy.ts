// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";

function toBeTruthy(actual: unknown): MatchResult {
  return {
    pass: !!actual,
    expected: "except primitive value",
  };
}

export { toBeTruthy };
