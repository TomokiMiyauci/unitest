// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { predict } from "./to_be.ts";

function noWhiteSpace(value: string): string {
  return value.replaceAll(/\s/g, "");
}

function toEqualIgnoringWhitespace(
  actual: string,
  expected: string,
): MatchResult {
  const HINT = "except white-space";
  const _actual = noWhiteSpace(actual);
  const _expected = noWhiteSpace(expected);

  return {
    pass: predict(_actual, _expected),
    expected: _expected,
    actual: _actual,
    expectedHint: `Expected ${HINT}:`,
    actualHint: `Actual ${HINT}:`,
  };
}

export { noWhiteSpace, toEqualIgnoringWhitespace };
