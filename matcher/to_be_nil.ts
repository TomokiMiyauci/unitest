// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";
import { isNil } from "@/deps.ts";

function toBeNil(actual: unknown): MatchResult {
  if (isNil(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "null or undefined",
      matcher: "toBeNil",
    }),
  });
}

export { toBeNil };
