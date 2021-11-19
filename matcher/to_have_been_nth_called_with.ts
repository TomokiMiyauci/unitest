// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import type { Mock, MockCall } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";
import { equal } from "@/deps.ts";

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
  if (predict(mock.calls, nthCall, ...expected)) return success();

  return fail({
    message: `expect(${stringify(mock)}).toHaveBeenNthCalledWith(${
      stringify(nthCall)
    }, ${stringify(expected)})`,
  });
}

export { predict, toHaveBeenNthCalledWith };
