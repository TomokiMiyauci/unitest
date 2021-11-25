// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function toSatisfyAny<T>(
  actual: T[],
  predicate: (value: T) => boolean,
): MatchResult {
  return {
    pass: actual.some(predicate),
    expected: "satisfy predicate for any values",
  };
}

export { toSatisfyAny };
