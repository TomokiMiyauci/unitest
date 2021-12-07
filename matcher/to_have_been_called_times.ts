// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";

function toHaveBeenCalledTimes(
  { mock }: MockObject,
  expected: number,
): MatchResult {
  return {
    pass: mock.calls.length === expected,
    expected,
  };
}

export { toHaveBeenCalledTimes };
