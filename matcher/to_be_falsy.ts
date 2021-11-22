// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toBeFalsy(actual: unknown): MatchResult {
  return {
    pass: !actual,
    expected: "primitive value",
  };
}

export { toBeFalsy };
