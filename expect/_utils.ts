// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { stringifyResult } from "../helper/format.ts";
import { AssertionError } from "../deps.ts";

import type { Matcher, MatchResult } from "../matcher/types.ts";
import type {
  PostModifierFn,
  PostModifierResult,
  PreModifierFn,
  PreModifierResult,
} from "../modifier/types.ts";
import type { PartialByKeys } from "../_types.ts";

type Result = {
  actual: unknown;
  matcherArgs: readonly unknown[];
  resultActual: unknown;
  actualHint: string;
  expected: unknown;
  expectedHint: string;
};

/** helper for pick field of `name` */
function pickName<T>({ name }: { name: T }): T {
  return name;
}

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
): PartialByKeys<Result, "resultActual"> & { pass: boolean } {
  return {
    ...expectContext,
    ...preModifierContexts.reduce(
      returnReducer,
      {} as PreModifierResult,
    ),
    ...matcherContext.returns,
    ...postModifierContexts.reduce(
      returnReducer,
      {} as PreModifierResult,
    ),
  };
}

/** assert match result, if fail it throw `AssertionError`
 */
function assert(
  context: ExpectContext,
): Result | never {
  const { pass, resultActual, ...rest } = mergeContext(context);
  const result: Result = {
    ...rest,
    resultActual: resultActual ? resultActual : rest.actual,
    actual: context.expectContext.actual,
  };

  if (pass) {
    return result;
  }

  const preModifierNames = context.preModifierContexts.map(pickName);
  const postModifierNames = context.postModifierContexts.map(pickName);
  const matcherName = context.matcherContext.name;
  const failMessage = stringifyResult({
    ...result,
    preModifierNames,
    postModifierNames,
    matcherName,
  });

  throw new AssertionError(failMessage);
}

type PreModifierContext = {
  name: PropertyKey;
  args: Parameters<PreModifierFn>;
  returns: PreModifierResult;
};

type ExpectContext = {
  expectContext: {
    actual: Result["actual"];
    matcher: Matcher;
    matcherArgs: readonly unknown[];
    actualHint: string;
    expectedHint: string;
  };
  preModifierContexts: PreModifierContext[];
  postModifierContexts: {
    name: PropertyKey;
    args: Parameters<PostModifierFn>;
    returns: PostModifierResult;
  }[];
  matcherContext: {
    name: PropertyKey;
    args: Parameters<Matcher>;
    returns: MatchResult;
  };
};

const DEFAULT_EXPECTED_HINT = "Expected:";
const DEFAULT_ACTUAL_HINT = "Actual:";

export { assert, DEFAULT_ACTUAL_HINT, DEFAULT_EXPECTED_HINT, mergeContext };
export type { ExpectContext, PreModifierContext };
