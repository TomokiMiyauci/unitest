// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isTrue } from "../deps.ts";

function toBeTrue(actual: unknown): MatchResult {
  return {
    pass: isTrue(actual),
    expected: true,
  };
}

export { toBeTrue };
