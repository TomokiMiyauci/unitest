// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { contains } from "./utils.ts";
import type { MockObject } from "../mock/fn.ts";
import type { MatchResult } from "./types.ts";

function toHaveBeenCalledWith(
  { mock }: MockObject,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: contains(mock.calls, expected),
    expected,
  };
}

export { toHaveBeenCalledWith };
