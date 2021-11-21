// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { fail, printHint, success } from "./utils.ts";
import { isEmptyObject } from "../deps.ts";

// deno-lint-ignore ban-types
function toBeEmptyObject(actual: object): MatchResult {
  if (isEmptyObject(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "empty object",
      matcher: "toBeEmptyObject",
    }),
  });
}

export { toBeEmptyObject };
