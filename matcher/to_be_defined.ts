// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isUndefined } from "../deps.ts";

function toBeDefined(actual: unknown): MatchResult {
  return {
    pass: !isUndefined(actual),
    expected: "except undefined",
  };
}

export { toBeDefined };
