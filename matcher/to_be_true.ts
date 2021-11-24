// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isTrue } from "../deps.ts";

function toBeTrue(actual: unknown): MatchResult {
  return {
    pass: isTrue(actual),
    expected: true,
  };
}

export { toBeTrue };
