// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../helper/equal.ts";

function predict(
  calls: MockObject["mock"]["calls"],
  ...expected: readonly unknown[]
): boolean {
  const lastCalled = calls[calls.length - 1];
  return equal(lastCalled, expected);
}

function toHaveBeenLastCalledWith(
  { mock }: MockObject,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, ...expected),
    expected,
  };
}

export { predict, toHaveBeenLastCalledWith };
