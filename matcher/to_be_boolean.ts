// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isBoolean } from "../deps.ts";

function toBeBoolean(actual: unknown): MatchResult {
  return {
    pass: isBoolean(actual),
    expected: "boolean",
  };
}

export { toBeBoolean };
