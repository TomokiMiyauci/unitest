// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type {
  AnyFn,
  OmitBy,
  PropertyFilter,
  ShiftRightParameters,
} from "../_types.ts";
import { jestMatcherMap } from "../mod.ts";
import type { Matcher, MatchResult } from "../matcher/types.ts";
import type { PostModifier, PreModifier } from "../modifier/types.ts";
import { not } from "../modifier/not.ts";
import { printHint, stringify } from "../matcher/utils.ts";
import { AssertionError, isObject } from "../deps.ts";
import { isPromise } from "../deps.ts";
import { resolves } from "../modifier/resolves.ts";
import { rejects } from "../modifier/rejects.ts";

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

type ModifierMap = {
  pre?: Record<string | symbol, PreModifier>;
  post?: Record<string | symbol, PostModifier>;
};

type Expected<
  T extends MatcherMap,
  Pre extends ModifierMap["pre"],
  Post extends ModifierMap["post"],
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
  { matcherMap, modifierMap: { pre: preModifierMap, post: postModifierMap } }: {
    matcherMap: M;
    modifierMap: Modifier;
  },
) {
  return <T = unknown>(
    actual: T,
  ): Expected<
    OmitBy<PropertyFilter<M, T>>,
    Modifier["pre"],
    Modifier["post"]
  > => {
    let pre: [string | symbol, PreModifier] | undefined;
    let post: [string | symbol, PostModifier] | undefined;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        // TODO: more need check
        if (isObject(postModifierMap) && name in postModifierMap) {
          post = [name, postModifierMap[name]];
          return self;
        }

        if (isObject(preModifierMap) && name in preModifierMap) {
          pre = [name, preModifierMap[name]];
          return self;
        }

        const matcher = matcherMap[name] as Matcher | undefined;
        if (!matcher) {
          throw new TypeError(`matcher not found: ${stringify(name)}`);
        }

        const r = (...args: any[]) => {
          const { pass, expected } = expectTo({
            matcher,
            actual,
            expected: args,
            preModifier: pre?.[1],
            postModifier: post?.[1],
          });
          if (!pass) {
            const failMessage = printHint({
              actual,
              expected,
              matcher: String(name),
              matcherArgs: args,
              preModifier: pre?.[0],
              postModifier: post?.[0],
            });
            throw new AssertionError(failMessage);
          }
        };

        const promise = async (...args: any[]) => {
          const { pass, expected } = await promiseExpectTo({
            matcher,
            actual,
            expected: args,
            preModifier: pre?.[1],
            postModifier: post?.[1],
          });
          if (!pass) {
            const failMessage = printHint({
              actual,
              expected,
              matcher: String(name),
              matcherArgs: args,
              preModifier: pre?.[0],
              postModifier: post?.[0],
            });
            throw new AssertionError(failMessage);
          }
        };

        return isPromise(actual) ? promise : r;
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
    preModifier?: PreModifier;
    postModifier?: PostModifier;
  },
): Promise<MatchResult> {
  const { actual: _actual } = await preModifier?.({
    actual,
    expected,
    matcher,
  }) ?? { actual };

  const { pass, expected: expectedValue } = matcher(_actual, ...expected);

  const { pass: _pass, expected: _expected } = postModifier?.({
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
    preModifier?: PreModifier;
    postModifier?: PostModifier;
  },
): MatchResult {
  const { pass, expected: expLabel } = matcher(actual, ...expected);

  const after = postModifier?.({
    actual,
    expected,
    matcher,
    pass,
    expectedValue: expLabel,
  });

  const [_pass, _failMessage] = after
    ? [after.pass, after.expected]
    : [pass, expLabel];

  return {
    pass: _pass,
    expected: _failMessage,
  };
}

function expect<T>(actual: T) {
  return defineExpect({
    matcherMap: jestMatcherMap,
    modifierMap: {
      post: {
        not,
      },
      pre: {
        resolves,
        rejects,
      },
    },
  })(actual);
}

export { defineExpect, expect };
export type { Expected, MatcherMap };
