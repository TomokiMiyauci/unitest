// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { stringifyResult } from "../helper/format.ts";
import { AssertionError } from "../deps.ts";

import type { Matcher, RenamedMatchResult } from "../matcher/types.ts";
import type { Rename } from "../_types.ts";
import type {
  PostModifierContext,
  PostModifierResult,
  PreModifierFn,
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
    preModifierName?: PropertyKey;
    postModifierNames: PropertyKey[];
  },
): Result | never {
  if (result.pass) {
    return result;
  }
  const failMessage = stringifyResult(result);

  throw new AssertionError(failMessage);
}

type ExpectContext = {
  expectContext: {
    actual: Result["actual"];
    matcher: Matcher;
    matcherArgs: readonly unknown[];
    actualHint: string;
    expectedHint: string;
  };
  preModifierContext?: {
    args: Parameters<PreModifierFn>[0] & Parameters<PreModifierFn>[1];
    returns: Rename<PreModifierResult, "actual", "actualResult">;
  };
  postModifierContext?: {
    args: PostModifierContext;
    returns: PostModifierResult;
  };
  matcherContext: {
    args: Pick<Result, "actual" | "matcherArgs">;
    returns: RenamedMatchResult;
  };
};

/** merge expect context */
function mergeContext(
  { expectContext, preModifierContext, postModifierContext, matcherContext }:
    ExpectContext,
): Result & { pass: boolean } {
  return {
    actualResult: expectContext.actual,
    ...expectContext,
    ...preModifierContext?.returns,
    ...matcherContext.returns,
    ...postModifierContext?.returns,
  };
}

const DEFAULT_EXPECTED_HINT = "Expected:";
const DEFAULT_ACTUAL_HINT = "Actual:";

export { assert, DEFAULT_ACTUAL_HINT, DEFAULT_EXPECTED_HINT, mergeContext };
