// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../helper/equal.ts";

function predict(
  calls: MockObject["mock"]["calls"],
  nthCall: number,
  ...expected: readonly unknown[]
): boolean {
  const call = calls[nthCall - 1];
  return equal(call, expected);
}

function toHaveBeenNthCalledWith(
  { mock }: MockObject,
  nthCall: number,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, nthCall, ...expected),
    expected,
  };
}

export { predict, toHaveBeenNthCalledWith };
