// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import type { Mock, MockCall } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";
import { equal } from "@/deps.ts";

function predict(
  calls: MockCall["calls"],
  ...expected: unknown[]
): boolean {
  const lastCalled = calls[calls.length - 1];
  return equal(lastCalled, expected);
}

function toHaveBeenLastCalledWith(
  { mock }: Mock,
  ...expected: unknown[]
): MatchResult {
  if (predict(mock.calls, ...expected)) return success();

  return fail({
    message: `expect(${stringify(mock)}).toHaveBeenLastCalledWith(${
      stringify(expected)
    })`,
  });
}

export { predict, toHaveBeenLastCalledWith };
