// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal } from "../deps.ts";
import { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function toEqual(actual: unknown, expected: unknown): MatchResult {
  if (equal(actual, expected)) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toEqual",
    }),
  });
}

export { toEqual };
