// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";

function toBeNil(actual: unknown): MatchResult {
  return {
    pass: isNil(actual),
    expected: "null or undefined",
  };
}

export { toBeNil };
