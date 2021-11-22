// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeTruthy(actual: unknown): MatchResult {
  return {
    pass: !!actual,
    expected: "except primitive value",
  };
}

export { toBeTruthy };
