// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MockObject } from "../mock/mock.ts";
import type { MatchResult } from "./types.ts";
import { isLength0 } from "../deps.ts";

function toHaveBeenCalled({ mock }: MockObject): MatchResult {
  return {
    pass: !isLength0(mock.calls),
    expected: "0 <= calls",
  };
}

export { toHaveBeenCalled };
