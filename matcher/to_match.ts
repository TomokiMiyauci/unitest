// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";

function predict(actual: string, expected: string | RegExp): boolean {
  if (isString(expected)) return actual.includes(expected);

  return expected.test(actual);
}

function toMatch(actual: string, expected: string | RegExp): MatchResult {
  return {
    pass: predict(actual, expected),
    expected,
  };
}

export { predict, toMatch };
