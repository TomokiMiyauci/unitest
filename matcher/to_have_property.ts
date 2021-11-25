// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isString } from "../deps.ts";
import { hasPath } from "./utils.ts";

type PredictResult = { result: boolean; path: PropertyKey[] };

function predict(
  actual: object,
  expected: PropertyKey | PropertyKey[],
): PredictResult {
  const path = Array.isArray(expected)
    ? expected
    : isString(expected)
    ? expected.split(".")
    : [expected];
  return { result: hasPath(path, actual), path };
}

function toHaveProperty(
  actual: object,
  expected: PropertyKey | PropertyKey[],
): MatchResult {
  const { result: pass, path } = predict(actual, expected);
  return {
    pass,
    expected: path.join(" -> "),
  };
}

export { predict, toHaveProperty };
export type { PredictResult };
