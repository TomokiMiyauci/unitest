// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { jestMatcherMap } from "../matcher/preset.ts";
import { jestModifierMap } from "../modifier/preset.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { stringify, stringifyAssert } from "../helper/format.ts";

import type {
  AnyFn,
  OmitBy,
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
import type { StringifyAssert } from "../helper/format.ts";

function throwError(message: string, ErrorClass = AssertionError): never {
  throw new ErrorClass(message);
}

type Expected<
  T extends MatcherMap,
  Pre extends PickModifierByType<ModifierMap, "pre">,
  Post extends PickModifierByType<ModifierMap, "post">,
> =
  & {
    [k in keyof Pre]: Omit<Shift<T>, k> & { [k in keyof Post]: Shift<T> };
  }
  & {
    [k in keyof Post]: Omit<Shift<T>, k>;
  }
  & Shift<T>;

type Shift<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftRightParameters<T[k], MatchResult>;
};

function defineExpect<
  M extends MatcherMap,
  Modifier extends ModifierMap,
>(
  { matcherMap, modifierMap }: {
    matcherMap: M;
    modifierMap: Modifier;
  },
) {
  return <T = unknown>(
    actual: T,
  ): Expected<
    OmitBy<PropertyFilter<M, T>>,
    PickModifierByType<Modifier, "pre">,
    PickModifierByType<Modifier, "post">
  > => {
    let pre: [string | symbol, PreModifierFn] | undefined;
    let post: [string | symbol, PostModifierFn] | undefined;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        // TODO: more need check
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
            & Pick<StringifyAssert, "matcherArgs">,
        ): void => {
          const failMessage = stringifyAssert({
            actual,
            matcher: String(name),
            expected,
            matcherArgs,
            preModifier: pre?.[0],
            postModifier: post?.[0],
          });
          if (!pass) {
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
            expected: args,
          });

          execAssert({ ...result, matcherArgs: args });
        };

        const promise = async (...args: any[]) => {
          const result = await promiseExpectTo({
            ...expectMap,
            expected: args,
          });
          execAssert({ ...result, matcherArgs: args });
        };

        return isPromise(actual) ? promise : sync;
      },
    });

    return self;
  };
}

async function promiseExpectTo(
  { actual, matcher, expected, preModifier, postModifier }: {
    actual: unknown;
    expected: unknown[];
    matcher: Matcher;
    preModifier?: PreModifierFn;
    postModifier?: PostModifierFn;
  },
): Promise<MatchResult> {
  const { actual: _actual } = await preModifier?.({
    actual,
    expected,
    matcher,
  }) ?? { actual };

  const { pass, expected: expectedValue } = matcher(_actual, ...expected);

  const { pass: _pass = pass, expected: _expected = expectedValue } =
    postModifier?.({
      actual: _actual,
      expected,
      matcher,
      pass,
      expectedValue,
    }) ?? { pass, expected };

  return {
    pass: _pass,
    expected: _expected,
  };
}

function expectTo(
  { matcher, actual, expected, postModifier }: {
    actual: unknown;
    expected: unknown[];
    matcher: Matcher;
    preModifier?: PreModifierFn;
    postModifier?: PostModifierFn;
  },
): MatchResult {
  const { pass, expected: expectedValue } = matcher(actual, ...expected);

  const { pass: _pass = pass, expected: _expected = expectedValue } =
    postModifier?.({
      actual,
      expected,
      matcher,
      pass,
      expectedValue,
    }) ?? { pass, expected: expectedValue };

  return {
    pass: _pass,
    expected: _expected,
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
