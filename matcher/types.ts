// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
type Matcher = (
  actual: any,
  ...expected: any[]
) => MatchResult;

type MatchResult = {
  /** result of matching */
  pass: boolean;

  /** overwrite actual value when display error */
  actual?: unknown;

  /** overwrite expected value when display error */
  expected?: unknown;

  /** hint for actual value when display error */
  actualHint?: unknown;

  /** hint for expected value when display error */
  expectedHint?: unknown;
};

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

export type { Matcher, MatcherMap, MatchResult };
