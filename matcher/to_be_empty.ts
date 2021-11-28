// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isEmpty } from "../deps.ts";
import type { MatchResult } from "./types.ts";

function toBeEmpty<T>(
  actual: Iterable<T> | Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: isEmpty(actual),
    expected: "empty",
  };
}

export { toBeEmpty };
