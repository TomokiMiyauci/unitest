// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isEmptyObject } from "../deps.ts";

// deno-lint-ignore ban-types
function toBeEmptyObject(actual: object): MatchResult {
  return {
    pass: isEmptyObject(actual),
    expected: "empty object",
  };
}

export { toBeEmptyObject };
