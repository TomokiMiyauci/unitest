// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";
import { fail, printHint, success } from "./utils.ts";

function toBeAnything(actual: unknown): MatchResult {
  if (!isNil(actual)) return success();

  return fail({
    message: printHint({
      actual,
      expected: "All except null and undefined",
      matcher: "toBeAnything",
    }),
  });
}

export { toBeAnything };
