// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { has } from "./utils.ts";
import { isLength0 } from "../deps.ts";

type PredictResult = {
  result: boolean;
  noKeys: PropertyKey[];
};

function predict(actual: object, expected: PropertyKey[]): PredictResult {
  const notExistsKeys = expected.filter((key) => !has(key, actual));

  return {
    result: isLength0(notExistsKeys),
    noKeys: notExistsKeys,
  };
}

function toContainKeys(actual: object, expected: PropertyKey[]): MatchResult {
  const { result: pass, noKeys } = predict(actual, expected);
  return {
    pass,
    expected: `missing keys: ${noKeys.join(", ")}`,
  };
}

export { predict, toContainKeys };
export type { PredictResult };
