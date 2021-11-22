// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Mock } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";

function toHaveBeenCalledTimes({ mock }: Mock, expected: number): MatchResult {
  return {
    pass: mock.calls.length === expected,
    expected,
  };
}

export { toHaveBeenCalledTimes };
