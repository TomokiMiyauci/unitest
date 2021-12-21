// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { stringifyResult } from "../helper/format.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { last } from "../matcher/utils.ts";

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
  {
    expectContext,
    preModifierContexts,
    postModifierContexts,
    matcherContext,
    hookContext,
  }: ExpectContext,
): PartialByKeys<Result, "resultActual"> & { pass: boolean } {
  return {
    ...expectContext,
    ...preModifierContexts.reduce(
      returnReducer,
      {} as PreModifierResult,
    ),
    ...matcherContext.returns,
    ...last(hookContext.actualHints.filter(({ actualHint }) => actualHint)),
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
  hookContext: {
    actualHints: { name: PropertyKey; actualHint: string }[];
  };
};

const DEFAULT_EXPECTED_HINT = "Expected:";
const DEFAULT_ACTUAL_HINT = "Actual:";

/** factory for pre modifier reducer */
function makePreModifierReducer(
  [actual, preModifierArgs]: Parameters<PreModifierFn>,
) {
  return (
    [acc, usePromise]: [
      | PreModifierContext[]
      | (PreModifierContext | Promise<PreModifierContext>)[],
      boolean,
    ],
    [name, fn]: [PropertyKey, PreModifierFn],
  ) => {
    const lastResult = last(acc);

    if (isPromise(lastResult)) {
      return [
        [
          ...acc,
          lastResult.then(async ({ returns }) => {
            const args = [
              returns.actual,
              preModifierArgs,
            ] as Parameters<PreModifierFn>;
            return {
              name,
              args,
              returns: await fn(...args),
            };
          }),
        ],
        true,
      ] as [
        (PreModifierContext | Promise<PreModifierContext>)[],
        true,
      ];
    } else {
      const args: Parameters<PreModifierFn> = [
        lastResult?.returns.actual ?? actual,
        preModifierArgs,
      ];
      const value = fn(...args);

      /** utility for make shared value */
      const makeShared = (
        returns: PreModifierResult<unknown>,
      ): PreModifierContext => ({
        name,
        args,
        returns,
      });

      if (isPromise(value)) {
        return [[
          ...acc,
          value.then(makeShared),
        ], true] as [
          (PreModifierContext | Promise<PreModifierContext>)[],
          true,
        ];
      }

      return [[...acc, makeShared(value)], usePromise] as [
        PreModifierContext[],
        false,
      ];
    }
  };
}

/** factory for post modifier reducer */
function makePostModifierReducer(
  [postModifierContext]: Parameters<PostModifierFn>,
) {
  return (
    acc: ExpectContext["postModifierContexts"],
    [name, fn]: [PropertyKey, PostModifierFn],
  ) => {
    const args: Parameters<PostModifierFn> = [{
      ...postModifierContext,
      ...last(acc)?.returns,
    }];
    const returns = fn(...args);
    return [...acc, { name, args, returns }];
  };
}

function makeActualHintHookReducer(actualHint: string) {
  return (
    acc: ExpectContext["hookContext"]["actualHints"],
    { name, returns }: PreModifierContext,
  ) => {
    const reserveActualHint = returns.reserveActualHint;
    if (!reserveActualHint) {
      return acc;
    }
    return [...acc, {
      name,
      actualHint: reserveActualHint(
        last(acc)?.actualHint ?? actualHint,
      ),
    }];
  };
}

export {
  assert,
  DEFAULT_ACTUAL_HINT,
  DEFAULT_EXPECTED_HINT,
  makeActualHintHookReducer,
  makePostModifierReducer,
  makePreModifierReducer,
  mergeContext,
};
export type { ExpectContext, PreModifierContext };
