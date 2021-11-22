// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Mock } from "../mock/types.ts";
import type { MatchResult } from "./types.ts";
import { isLength0 } from "../deps.ts";

function toHaveBeenCalled({ mock }: Mock): MatchResult {
  return {
    pass: !isLength0(mock.calls),
    expected: "0 <= calls",
  };
}

export { toHaveBeenCalled };
