// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { equal } from "../deps.ts";
import { MatchResult } from "./types.ts";

function toEqual(actual: unknown, expected: unknown): MatchResult {
  return {
    pass: equal(actual, expected),
    expected,
  };
}

export { toEqual };
