// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
type Matcher = (
  value: any,
  ...args: any[]
) => MatchResult;

type MatchResult = {
  /** result of matcher */
  pass: boolean;

  /** fail message */
  expected: unknown;

  expectedLabel?: string;
};

export type { Matcher, MatchResult };
