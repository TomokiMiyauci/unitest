// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isObject } from "../deps.ts";

function toBeObject(actual: unknown): MatchResult {
  return {
    pass: isObject(actual),
    expected: "object",
  };
}

export { toBeObject };
