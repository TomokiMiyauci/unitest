// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "./types.ts";
import { stringify } from "./utils.ts";

function predict(actual: number, start: number, end: number): boolean {
  return start <= actual && actual < end;
}

function toBeWithin(actual: number, start: number, end: number): MatchResult {
  return {
    pass: predict(actual, start, end),
    expected: `${stringify(start)} <= actual < ${stringify(end)}`,
  };
}

export { predict, toBeWithin };
