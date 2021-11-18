// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import { MatchResult } from "@matcher/types.ts";
import { isString } from "@/deps.ts";

function predict(actual: string, expected: string | RegExp): boolean {
  if (isString(expected)) return actual.includes(expected);

  return expected.test(actual);
}

function toMatch(actual: string, expected: string | RegExp): MatchResult {
  if (predict(actual, expected)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toMatch(${stringify(expected)})`,
  });
}

export { predict, toMatch };
