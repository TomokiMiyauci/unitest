// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toBeExtensible(actual: unknown): MatchResult {
  return {
    pass: Object.isExtensible(actual),
    expected: "extensible object",
  };
}

export { toBeExtensible };
