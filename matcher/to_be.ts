// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function predict(actual: unknown, expected: unknown): boolean {
  return Object.is(actual, expected);
}

/**
 * @param actual - Any value
 * @param expected - Any Primitive value
 */
function toBe(actual: unknown, expected: unknown): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBe(${stringify(expected)})`,
  });
}

export { predict, toBe };
