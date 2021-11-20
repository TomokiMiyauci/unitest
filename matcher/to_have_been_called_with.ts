// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "@matcher/utils.ts";
import type { Mock, MockCall } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";
import { equal } from "@/deps.ts";

function predict(
  calls: MockCall["calls"],
  ...expected: unknown[]
): boolean {
  return calls.some((args) => equal(args, expected));
}

function toHaveBeenCalledWith(
  { mock }: Mock,
  ...expected: unknown[]
): MatchResult {
  if (predict(mock.calls, ...expected)) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected,
      matcherArgs: expected,
      matcher: "toHaveBeenCalledWith",
    }),
  });
}

export { predict, toHaveBeenCalledWith };
