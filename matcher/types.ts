// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
type Matcher = (
  value: any,
  ...args: any[]
) => MatchResult;

type MatchResult = {
  pass: boolean;
  message?: string;
};

export type { Matcher, MatchResult };
