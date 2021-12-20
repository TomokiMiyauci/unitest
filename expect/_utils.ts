// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { stringifyResult } from "../helper/format.ts";
import { AssertionError } from "../deps.ts";

import type { Matcher, RenamedMatchResult } from "../matcher/types.ts";
import type { Rename } from "../_types.ts";
import type {
  PostModifierContext,
  PostModifierResult,
  PreModifierResult,
} from "../modifier/types.ts";

type Result = {
  actual: unknown;
  matcherArgs: readonly unknown[];
  actualResult: unknown;
  actualHint: string;
  expected: unknown;
  expectedHint: string;
};

/** assert match result, if fail it throw `AssertionError`
 */
function assert(
  result: Result & {
    pass: boolean;
    matcherName: string;
    preModifierNames: PropertyKey[];
    postModifierNames: PropertyKey[];
  },
): Result | never {
  if (result.pass) {
    return result;
  }
  const failMessage = stringifyResult(result);

  throw new AssertionError(failMessage);
}

type PreModifierContext = {
  name: string;
  args: {
    actual: unknown;
    matcherArgs: readonly unknown[];
    matcher: Matcher;
  };
  returns: Rename<PreModifierResult, "actual", "actualResult">;
};

type ExpectContext = {
  expectContext: {
    actual: Result["actual"];
    actualResult: unknown;
    matcher: Matcher;
    matcherArgs: readonly unknown[];
    actualHint: string;
    expectedHint: string;
  };
  preModifierContexts: PreModifierContext[];
  postModifierContexts: {
    name: string;
    args: PostModifierContext;
    returns: PostModifierResult;
  }[];
  matcherContext: {
    name: string;
    args: Pick<Result, "actual" | "matcherArgs">;
    returns: RenamedMatchResult;
  };
};

/** helper for reducer */
function returnReducer(
  acc: Record<PropertyKey, unknown>,
  { returns }: { returns: Record<PropertyKey, unknown> },
) {
  return {
    ...acc,
    ...returns,
  };
}

/** merge expect context */
function mergeContext(
  { expectContext, preModifierContexts, postModifierContexts, matcherContext }:
    ExpectContext,
): Result & { pass: boolean } {
  return {
    ...expectContext,
    ...preModifierContexts.reduce(
      returnReducer,
      {} as PostModifierResult,
    ),
    ...matcherContext.returns,
    ...postModifierContexts.reduce(
      returnReducer,
      {} as Rename<PreModifierResult, "actual", "actualResult">,
    ),
  };
}

const DEFAULT_EXPECTED_HINT = "Expected:";
const DEFAULT_ACTUAL_HINT = "Actual:";

export { assert, DEFAULT_ACTUAL_HINT, DEFAULT_EXPECTED_HINT, mergeContext };
export type { ExpectContext, PreModifierContext };
