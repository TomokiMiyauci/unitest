// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Mock, MockCall } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../deps.ts";

function predict(
  calls: MockCall["calls"],
  nthCall: number,
  ...expected: unknown[]
): boolean {
  const call = calls[nthCall - 1];
  return equal(call, expected);
}

function toHaveBeenNthCalledWith(
  { mock }: Mock,
  nthCall: number,
  ...expected: unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, nthCall, ...expected),
    expected,
  };
}

export { predict, toHaveBeenNthCalledWith };
