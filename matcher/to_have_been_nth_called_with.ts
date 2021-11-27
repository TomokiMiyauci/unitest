// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Mock, MockCall } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../deps.ts";

function predict(
  calls: MockCall["calls"],
  nthCall: number,
  ...expected: readonly unknown[]
): boolean {
  const call = calls[nthCall - 1];
  return equal(call, expected);
}

function toHaveBeenNthCalledWith(
  { mock }: Mock,
  nthCall: number,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, nthCall, ...expected),
    expected,
  };
}

export { predict, toHaveBeenNthCalledWith };
