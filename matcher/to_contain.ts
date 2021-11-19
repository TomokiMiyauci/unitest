// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

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
    message: `expect(${stringify(actual)}).toContain(${stringify(expected)})`,
  });
}

export { predict, toContain };
export type { ContainIterable };
