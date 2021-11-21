// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";
import { isPositiveNumber } from "../deps.ts";

function toBePositive(actual: number): MatchResult {
  if (isPositiveNumber(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "positive number",
      matcher: "toBePositive",
    }),
  });
}

export { toBePositive };
