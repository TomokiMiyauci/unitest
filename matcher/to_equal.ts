// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal } from "@/deps.ts";
import { MatchResult } from "@matcher/types.ts";
import { fail, success } from "@matcher/utils.ts";

function toEqual(actual: unknown, expected: unknown): MatchResult {
  if (equal(actual, expected)) return success();

  return fail({
    message: `expect(${String(actual)}).toEqual(${String(expected)})`,
  });
}

export { toEqual };
