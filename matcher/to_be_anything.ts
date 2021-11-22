// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isNil } from "../deps.ts";

function toBeAnything(actual: unknown): MatchResult {
  return {
    pass: !isNil(actual),
    expected: "except null and undefined",
  };
}

export { toBeAnything };
