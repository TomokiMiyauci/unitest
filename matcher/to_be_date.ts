// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";
import { isDate } from "../deps.ts";

function toBeDate(actual: unknown): MatchResult {
  if (isDate(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "Date",
      matcher: "toBeDate",
    }),
  });
}

export { toBeDate };
