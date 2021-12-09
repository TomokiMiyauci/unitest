// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { jestMatcherMap } from "../matcher/preset.ts";
import { jestModifierMap } from "../modifier/preset.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { stringifyResult } from "../helper/format.ts";
import {
  DEFAULT_ACTUAL_HINT,
  DEFAULT_EXPECTED_HINT,
  expectTo,
  promiseExpectTo,
} from "./_utils.ts";
import { stringifyEquality } from "../helper/equal.ts";

import type {
  AnyFn,
  IsPromise,
  PickByFirstParameter,
  Resolve,
  ReturnTypePromisifyMap,
  ShiftFnArg,
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

type ReservedWord = "resolves" | "rejects";

type Expected<
  T extends MatcherMap,
  U,
  Pre extends PickModifierByType<ModifierMap, "pre">,
  Post extends PickModifierByType<ModifierMap, "post">,
  IsPromise extends boolean,
> =
  & {
    [k in keyof Pre]: IsPromise extends true ? k extends ReservedWord ? 
      & ReturnTypePromisifyMap<
        Omit<ShiftFnArgMap<PickByFirstParameter<T, Resolve<U>>>, k>
      >
      & {
        [k in keyof Post]: IsPromise extends true
          ? ReturnTypePromisifyMap<ShiftFnArgMap<T>>
          : ShiftFnArgMap<T>;
      }
    : ReturnTypePromisifyMap<
      Omit<ShiftFnArgMap<PickByFirstParameter<T, U>>, k>
    >
      : 
        & Omit<ShiftFnArgMap<T>, k>
        & {
          [k in keyof Post]: IsPromise extends true
            ? ReturnTypePromisifyMap<ShiftFnArgMap<T>>
            : ShiftFnArgMap<T>;
        };
  }
  & {
    [k in keyof Post]: IsPromise extends true
      ? ReturnTypePromisifyMap<Omit<ShiftFnArgMap<T>, k>>
      : Omit<ShiftFnArgMap<T>, k>;
  }
  & ShiftFnArgMap<PickByFirstParameter<T, U>>;

type ShiftFnArgMap<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftFnArg<T[k]>;
};

/** define custom expect */
function defineExpect<
  MatcherObject extends MatcherMap,
  Modifier extends ModifierMap,
>(
  { matcherMap, modifierMap }: {
    matcherMap: MatcherObject;
    modifierMap?: Modifier;
  },
) {
  return <T = unknown>(
    actual: T,
  ): Expected<
    MatcherObject,
    T,
    PickModifierByType<Modifier, "pre">,
    PickModifierByType<Modifier, "post">,
    IsPromise<T>
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
          throw new TypeError(`matcher not found: ${String(name)}`);
        }

        const execAssert = (
          {
            pass,
            matcherArgs,
            expectedHint,
            actualHint,
            actual: actualValue,
            expected: expectedValue,
          }:
            & MatchResult
            & Pick<StringifyResultArgs, "matcherArgs">,
        ): void => {
          if (!pass) {
            const failMessage = stringifyResult({
              actual,
              matcherArgs,
              matcher: String(name),
              actualValue,
              expectedValue: stringifyEquality(expectedValue),
              expectedHint,
              actualHint,
              preModifier: pre?.[0],
              postModifier: post?.[0],
            });
            throw new AssertionError(failMessage);
          }
        };

        const expectMap = {
          matcher,
          actual,
          preModifier: pre?.[1],
          postModifier: post?.[1],
          actualHint: DEFAULT_ACTUAL_HINT,
          expectedHint: DEFAULT_EXPECTED_HINT,
        };

        const sync = (...args: unknown[]): void => {
          const result = expectTo({
            ...expectMap,
            matcherArgs: args,
          });

          execAssert({ ...result, matcherArgs: args });
        };

        const promise = async (...args: unknown[]): Promise<void> => {
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

/** The expect function is used every time you want to test a value.
 * `expect` returns a `MatchResult` if the test is correct.
 * Otherwise, it throws an error with a message stating the cause of the test failure.
 */
function expect<T>(actual: T) {
  return defineExpect({
    matcherMap: jestMatcherMap,
    modifierMap: jestModifierMap,
  })(actual);
}

export { defineExpect, expect };
export type { Expected, MatcherMap };
