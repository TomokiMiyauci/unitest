// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { contains, fail, printHint, success } from "@matcher/utils.ts";
import type { Mock } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";

function toHaveBeenCalledWith(
  { mock }: Mock,
  ...expected: unknown[]
): MatchResult {
  if (contains(mock.calls, expected)) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected,
      matcherArgs: expected,
      matcher: "toHaveBeenCalledWith",
    }),
  });
}

export { toHaveBeenCalledWith };
