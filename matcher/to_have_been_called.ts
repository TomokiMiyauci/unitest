// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "./utils.ts";
import type { Mock } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";
import { isLength0 } from "../deps.ts";

function toHaveBeenCalled({ mock }: Mock): MatchResult {
  if (!isLength0(mock.calls)) return success();

  return fail({
    message: printHint({
      actual: mock,
      expected: "calls should be greater than 0",
      matcher: "toHaveBeenCalled",
    }),
  });
}

export { toHaveBeenCalled };
