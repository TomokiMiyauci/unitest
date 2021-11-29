// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Mock, MockCall } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";
import { equal } from "../deps.ts";

function predict(
  calls: MockCall["calls"],
  ...expected: readonly unknown[]
): boolean {
  const lastCalled = calls[calls.length - 1];
  return equal(lastCalled, expected);
}

function toHaveBeenLastCalledWith(
  { mock }: Mock,
  ...expected: readonly unknown[]
): MatchResult {
  return {
    pass: predict(mock.calls, ...expected),
    expected,
  };
}

export { predict, toHaveBeenLastCalledWith };
