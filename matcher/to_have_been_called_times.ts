// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "@matcher/utils.ts";
import type { Mock } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";

function toHaveBeenCalledTimes({ mock }: Mock, expected: number): MatchResult {
  if (mock.calls.length === expected) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected,
      matcherArgs: [expected],
      matcher: "toHaveBeenCalledTimes",
    }),
  });
}

export { toHaveBeenCalledTimes };
