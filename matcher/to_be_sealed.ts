// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toBeSealed(actual: unknown): MatchResult {
  return {
    pass: Object.isSealed(actual),
    expected: "sealed object",
  };
}

export { toBeSealed };
