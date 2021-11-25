// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isUndefined } from "../deps.ts";

function toBeDefined(actual: unknown): MatchResult {
  return {
    pass: !isUndefined(actual),
    expected: "except undefined",
  };
}

export { toBeDefined };
