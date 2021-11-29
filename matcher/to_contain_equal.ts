// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal, isObject } from "../deps.ts";
import type { MatchResult } from "./types.ts";

function predict(
  actual: Record<PropertyKey, unknown>,
  expected: Record<PropertyKey, unknown>,
): boolean {
  return Object.entries(expected).every(([expKey, expValue]) => {
    return Object.entries(actual).some(([actKey, actValue]) => {
      const isObjectExp = isObject(expValue);
      const isObjectAct = isObject(actValue);
      if (isObjectExp || isObjectAct) {
        if (!!isObjectExp && !!isObjectAct) {
          return predict(
            actValue as Record<PropertyKey, unknown>,
            expValue as Record<PropertyKey, unknown>,
          );
        }
        return false;
      }

      return equal(expKey, actKey) && equal(expValue, actValue);
    });
  });
}

function toContainEqual(
  actual: Record<PropertyKey, unknown>,
  expected: Record<PropertyKey, unknown>,
): MatchResult {
  return {
    pass: predict(actual, expected),
    expectedHint: "Expected to contain:",
    expected,
  };
}

export { predict, toContainEqual };
