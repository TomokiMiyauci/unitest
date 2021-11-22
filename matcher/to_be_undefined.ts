// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isUndefined } from "../deps.ts";

function toBeUndefined(actual: unknown): MatchResult {
  return {
    pass: isUndefined(actual),
    expected: undefined,
  };
}

export { toBeUndefined };
