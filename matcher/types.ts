// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Rename } from "../_types.ts";
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
  actual?: unknown;

  /** hint for actual value when display error */
  actualHint?: string;

  /** hint for expected value when display error */
  expectedHint?: string;
};

type RenamedMatchResult = Rename<MatchResult, "actual", "actualResult">;

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

export type { Matcher, MatcherMap, MatchResult, RenamedMatchResult };
