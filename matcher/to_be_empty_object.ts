// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isEmptyObject } from "../deps.ts";

function toBeEmptyObject(actual: object): MatchResult {
  return {
    pass: isEmptyObject(actual),
    expected: "empty object",
  };
}

export { toBeEmptyObject };
