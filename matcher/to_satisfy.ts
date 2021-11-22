// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";

function toSatisfy(
  actual: unknown,
  predicate: (actual: unknown) => boolean,
): MatchResult {
  return {
    pass: predicate(actual),
    expected: "satisfy predicate",
  };
}

export { toSatisfy };
