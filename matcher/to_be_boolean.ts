// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isBoolean } from "../deps.ts";

function toBeBoolean(actual: unknown): MatchResult {
  return {
    pass: isBoolean(actual),
    expected: "boolean",
  };
}

export { toBeBoolean };
