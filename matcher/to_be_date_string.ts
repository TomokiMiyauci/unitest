// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isDateString } from "../deps.ts";

import type { MatchResult } from "./types.ts";

function toBeDateString(actual: string): MatchResult {
  return {
    pass: isDateString(actual),
    expected: "date string",
  };
}

export { toBeDateString };
