// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";

/**
 * @deprecated
 */
function toBeAnything(actual: unknown): MatchResult {
  return {
    pass: !isNil(actual),
    expected: "All except null and undefined",
  };
}

export { toBeAnything };
