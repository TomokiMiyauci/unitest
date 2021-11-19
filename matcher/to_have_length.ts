// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function predict(actual: unknown, expected: number): boolean {
  return (actual as any)?.length === expected;
}

function toHaveLength(actual: unknown, expected: number): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toHaveLength(${
      stringify(expected)
    })`,
  });
}

export { predict, toHaveLength };
