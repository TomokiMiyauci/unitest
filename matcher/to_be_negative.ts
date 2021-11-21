// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";
import { isNegativeNumber } from "../deps.ts";

function toBeNegative(actual: number): MatchResult {
  if (isNegativeNumber(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "negative number",
      matcher: "toBeNegative",
    }),
  });
}

export { toBeNegative };
