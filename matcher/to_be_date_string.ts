// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toBeDateString(actual: string): MatchResult {
  return {
    pass: !isNaN(Date.parse(actual)),
    expected: "date string",
  };
}

export { toBeDateString };
