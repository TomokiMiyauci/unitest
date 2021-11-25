// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Mock } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";

function toHaveBeenCalledTimes({ mock }: Mock, expected: number): MatchResult {
  return {
    pass: mock.calls.length === expected,
    expected,
  };
}

export { toHaveBeenCalledTimes };
