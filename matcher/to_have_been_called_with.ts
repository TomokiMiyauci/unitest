// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { contains } from "./utils.ts";
import type { Mock } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";

function toHaveBeenCalledWith(
  { mock }: Mock,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: contains(mock.calls, expected),
    expected,
  };
}

export { toHaveBeenCalledWith };
