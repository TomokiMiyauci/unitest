// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
type Matcher = (
  actual: any,
  ...expected: any[]
) => MatchResult;

type MatchResult = {
  /** result of matcher */
  pass: boolean;

  /** fail message */
  expected: unknown;

  expectedLabel?: string;
};

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

export type { Matcher, MatcherMap, MatchResult };
