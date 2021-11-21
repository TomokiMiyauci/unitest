// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";

function predict(actual: number, start: number, end: number): boolean {
  return start <= actual && actual < end;
}

function toBeWithin(actual: number, start: number, end: number): MatchResult {
  if (predict(actual, start, end)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "",
      matcher: "toBeWithin",
    }),
  });
}

export { predict, toBeWithin };
