// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { jestMatcherMap } from "../matcher/preset.ts";
import { jestModifierMap } from "../modifier/preset.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { stringify, stringifyResult } from "../helper/format.ts";

import type {
  AnyFn,
  OmitBy,
  PromisifyMap,
  PropertyFilter,
  ShiftRightParameters,
} from "../_types.ts";
import type { Matcher, MatchResult } from "../matcher/types.ts";
import type {
  PickModifierByType,
  PostModifierFn,
  PreModifierFn,
} from "../modifier/types.ts";
import type { ModifierMap } from "../modifier/types.ts";
import type { MatcherMap } from "../matcher/types.ts";
import type { StringifyResultArgs } from "../helper/format.ts";

function throwError(message: string, ErrorClass = AssertionError): never {
  throw new ErrorClass(message);
}

type Expected<
  T extends MatcherMap,
  Pre extends PickModifierByType<ModifierMap, "pre">,
  Post extends PickModifierByType<ModifierMap, "post">,
  IsPromise extends boolean,
> =
  & {
    [k in keyof Pre]:
      & PromisifyMap<Omit<Shift<T>, k>, IsPromise>
      & { [k in keyof Post]: PromisifyMap<Shift<T>, IsPromise> };
  }
  & {
    [k in keyof Post]: PromisifyMap<Omit<Shift<T>, k>, IsPromise>;
  }
  & PromisifyMap<Shift<T>, IsPromise>;

type Shift<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftRightParameters<T[k], MatchResult>;
};

function defineExpect<
  M extends MatcherMap,
  Modifier extends ModifierMap,
>(
  { matcherMap, modifierMap }: {
    matcherMap: M;
    modifierMap?: Modifier;
  },
) {
  return <T = unknown>(
    actual: T,
  ): Expected<
    OmitBy<PropertyFilter<M, T>>,
    PickModifierByType<Modifier, "pre">,
    PickModifierByType<Modifier, "post">,
    T extends Promise<any> ? true : false
  > => {
    let pre: [string | symbol, PreModifierFn] | undefined;
    let post: [string | symbol, PostModifierFn] | undefined;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        if (
          !!modifierMap && name in modifierMap
        ) {
          const modifier = modifierMap[name];

          if (modifier.type === "post") {
            post = [name, modifier.fn];
            return self;
          } else {
            pre = [name, modifier.fn];
            return self;
          }
        }

        const matcher = matcherMap[name] as Matcher | undefined;
        if (!matcher) {
          throw new TypeError(`matcher not found: ${stringify(name)}`);
        }

        const execAssert = (
          { pass, expected, matcherArgs }:
            & Pick<
              MatchResult,
              "pass" | "expected"
            >
            & Pick<StringifyResultArgs, "matcherArgs">,
        ): void => {
          if (!pass) {
            const failMessage = stringifyResult({
              actual,
              matcher: String(name),
              expected,
              matcherArgs,
              preModifier: pre?.[0],
              postModifier: post?.[0],
            });
            throwError(failMessage);
          }
        };

        const expectMap = {
          matcher,
          actual,
          preModifier: pre?.[1],
          postModifier: post?.[1],
        };

        const sync = (...args: any[]) => {
          const result = expectTo({
            ...expectMap,
            matcherArgs: args,
          });

          execAssert({ ...result, matcherArgs: args });
        };

        const promise = async (...args: any[]) => {
          const result = await promiseExpectTo({
            ...expectMap,
            matcherArgs: args,
          });
          execAssert({ ...result, matcherArgs: args });
        };

        return isPromise(actual) ? promise : sync;
      },
    });

    return self;
  };
}

type ExpectedToArgs = {
  actual: unknown;
  matcherArgs: unknown[];
  matcher: Matcher;
  preModifier?: PreModifierFn;
  postModifier?: PostModifierFn;
};

async function promiseExpectTo(
  { actual, matcher, matcherArgs, preModifier, postModifier }: ExpectedToArgs,
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

  return { ...matchResult, ...postResult };
}

function expectTo(
  { matcher, actual, matcherArgs, postModifier }: ExpectedToArgs,
): MatchResult {
  const matchResult = matcher(actual, ...matcherArgs);

  const postResult = postModifier?.({
    actual,
    matcherArgs,
    matcher,
    pass: matchResult.pass,
    expected: matchResult.expected ?? matcherArgs,
  }) ?? matchResult;

  return {
    ...matchResult,
    ...postResult,
  };
}

function expect<T>(actual: T) {
  return defineExpect({
    matcherMap: jestMatcherMap,
    modifierMap: jestModifierMap,
  })(actual);
}

export { defineExpect, expect };
export type { Expected, MatcherMap };
