// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";
import { isObject } from "@/deps.ts";

function toBeObject(actual: unknown): MatchResult {
  if (isObject(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Object",
      matcher: "toBeObject",
    }),
  });
}

export { toBeObject };
