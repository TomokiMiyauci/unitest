// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Matcher, MatchResult } from "../matcher/types.ts";

import type { PostModifierFn, PreModifierFn } from "../modifier/types.ts";

type ExpectedToArgs = {
  actual: unknown;
  matcherArgs: unknown[];
  matcher: Matcher;
  preModifier?: PreModifierFn;
  postModifier?: PostModifierFn;
} & Required<Pick<MatchResult, "actualHint" | "expectedHint">>;

async function promiseExpectTo(
  {
    actual,
    matcher,
    matcherArgs,
    preModifier,
    actualHint,
    expectedHint,
    postModifier,
  }: ExpectedToArgs,
): Promise<MatchResult> {
  const preResult = await preModifier?.({
    actual,
    matcherArgs,
    matcher,
  }) ?? { actual };

  const matchResult = matcher(preResult.actual ?? actual, ...matcherArgs);

  const postResult = postModifier?.({
    actual: matchResult.actual,
    matcherArgs,
    matcher,
    pass: matchResult.pass,
    expected: matchResult.expected ?? matcherArgs,
  }) ?? matchResult;

  return { actualHint, expectedHint, ...matchResult, ...postResult };
}

function expectTo(
  { matcher, actual, matcherArgs, expectedHint, actualHint, postModifier }:
    ExpectedToArgs,
): MatchResult {
  const matchResult = matcher(actual, ...matcherArgs);

  const postResult = postModifier?.({
    actual: matchResult?.actual ?? actual,
    matcherArgs,
    matcher,
    expectedHint: matchResult.expectedHint ?? expectedHint,
    pass: matchResult.pass,
    expected: matchResult.expected ?? matcherArgs,
  }) ?? matchResult;

  return {
    actual,
    expectedHint,
    actualHint,
    ...matchResult,
    ...postResult,
  };
}

const DEFAULT_EXPECTED_HINT = "Expected:";
const DEFAULT_ACTUAL_HINT = "Actual:";

export {
  DEFAULT_ACTUAL_HINT,
  DEFAULT_EXPECTED_HINT,
  expectTo,
  promiseExpectTo,
};
