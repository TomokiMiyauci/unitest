// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
type Matcher = (
  actual: any,
  ...expected: any[]
) => MatchResult;

type MatchResult = {
  /** result of matching */
  pass: boolean;

  /** overwrite expected value when display error */
  expected: unknown;

  /** overwrite actual value when display error */
  resultActual?: unknown;

  /** hint for actual value when display error */
  actualHint?: string;

  /** hint for expected value when display error */
  expectedHint?: string;
};

type MatcherMap = Record<
  PropertyKey,
  Matcher
>;

export type { Matcher, MatcherMap, MatchResult };
