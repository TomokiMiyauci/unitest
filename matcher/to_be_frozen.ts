// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toBeFrozen(actual: unknown): MatchResult {
  return {
    pass: Object.isFrozen(actual),
    expected: "frozen object",
  };
}

export { toBeFrozen };
