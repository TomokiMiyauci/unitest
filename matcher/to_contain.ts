// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

type ContainIterable = { includes: (search: any) => boolean };

function predict(actual: ContainIterable, expected: unknown): boolean {
  return actual.includes(expected);
}

function toContain(
  actual: ContainIterable,
  expected: unknown,
): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toContain",
    }),
  });
}

export { predict, toContain };
export type { ContainIterable };
