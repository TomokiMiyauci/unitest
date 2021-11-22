// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { isDate } from "../deps.ts";

function toBeDate(actual: unknown): MatchResult {
  return {
    pass: isDate(actual),
    expected: "date",
  };
}

export { toBeDate };
