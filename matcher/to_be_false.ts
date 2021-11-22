// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isFalse } from "../deps.ts";

function toBeFalse(actual: unknown): MatchResult {
  return {
    pass: isFalse(actual),
    expected: false,
  };
}

export { toBeFalse };
