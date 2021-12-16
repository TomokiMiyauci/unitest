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
  FirstParameter,
  OverwriteOf,
  PickOf,
  Resolve,
  ReturnTypePromisifyMap,
  ShiftFnArg,
} from "../_types.ts";
import type { Matcher, MatchResult } from "../matcher/types.ts";
import type {
  ExtractOf,
  PostModifierFn,
  PreModifier,
  PreModifierFn,
} from "../modifier/types.ts";
import type { ModifierMap } from "../modifier/types.ts";
import type { MatcherMap } from "../matcher/types.ts";
import type { StringifyResultArgs } from "../helper/format.ts";

type ShiftFnArgMap<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftFnArg<T[k]>;
};

type MatcherFilter<T, U extends Record<string, Matcher>> = ShiftFnArgMap<
  PickOf<U, (actual: T, ...args: any[]) => unknown>
>;

type FilterPreModifier<
  A,
  T extends ExtractOf<ModifierMap, { type: "pre" }>,
> = {
  [
    k
      in keyof T as (T[k] extends PreModifier
        ? A extends FirstParameter<T[k]["fn"]>["actual"] ? k : never
        : never)
  ]: T[k];
};

type Definition<
  Matcher extends MatcherMap,
  Modifier extends ModifierMap,
> = {
  matcherMap: Matcher;
  modifierMap?: Modifier;
};

interface Expect<
  Matcher extends MatcherMap,
  Modifier extends ModifierMap,
> {
  /** The expect function is used every time you want to test a value.
   * `expect` returns a `MatchResult` if the test is correct.
   * Otherwise, it throws an error with a message stating the cause of the test failure.
   */
  <T>(actual: T): Expected<
    T,
    Matcher,
    ExtractOf<Modifier, { type: "pre" }>,
    ExtractOf<Modifier, { type: "post" }>
  >;

  /** get definition object */
  getDefinition(): Definition<Matcher, Modifier>;
}

type Expected<
  Actual,
  Matcher extends MatcherMap,
  Pre extends ExtractOf<ModifierMap, { type: "pre" }>,
  Post extends ExtractOf<ModifierMap, { type: "post" }>,
> =
  & OverwriteOf<
    FilterPreModifier<Actual, Pre>,
    & ReturnTypePromisifyMap<MatcherFilter<Resolve<Actual>, Matcher>>
    & OverwriteOf<
      Post,
      ReturnTypePromisifyMap<MatcherFilter<Actual, Matcher>>
    >
  >
  & OverwriteOf<
    Post,
    MatcherFilter<Actual, Matcher>
  >
  & MatcherFilter<Actual, Matcher>;

/** Creates a fully customized expect. By default, there are no matchers or
 * modifiers. You can choose and configure only the matchers you want. This allows
 * you to optimise the bundle size.
 * ```ts
 * import {
 *   defineExpect,
 *   jestExtendedMatcherMap,
 *   not,
 *   test,
 *   toBe,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBe,
 *     ...jestExtendedMatcherMap,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("unitest is similar jest but not the same", () => {
 *   expect("unitest").not.toBe("jest");
 * });
 * ```
 */
function defineExpect<
  MatcherObject extends MatcherMap,
  Modifier extends ModifierMap,
>(
  { matcherMap, modifierMap }: Definition<MatcherObject, Modifier>,
): Expect<
  MatcherObject,
  Modifier
> {
  /** clojure expect */
  const _expect = (
    actual: unknown,
  ) => {
    let pre: [string | symbol, PreModifierFn] | undefined = undefined;
    let post: [string | symbol, PostModifierFn] | undefined = undefined;

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

          try {
            execAssert({ ...result, matcherArgs: args });
          } catch (e) {
            Error.captureStackTrace(e, sync);

            throw e;
          }
        };

        const promise = async (...args: unknown[]): Promise<void> => {
          const result = await promiseExpectTo({
            ...expectMap,
            matcherArgs: args,
          });
          try {
            execAssert({ ...result, matcherArgs: args });
          } catch (e) {
            Error.captureStackTrace(e, sync);

            throw e;
          }
        };

        return isPromise(actual) ? promise : sync;
      },
    });

    return self;
  };

  _expect["getDefinition"] = () => ({
    matcherMap,
    modifierMap,
  });

  return _expect;
}

/** Consists of a built-in matcher for `jest` and is ready to use out of
 * the box.
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("expect should have default jest matchers", async () => {
 *   await expect(Promise.resolve("test")).resolves.toBe("test");
 *   expect({}).toEqual({});
 * });
 * ```
 */
const expect = defineExpect({
  matcherMap: jestMatcherMap,
  modifierMap: jestModifierMap,
});

export { defineExpect, expect };
export type { Expected, MatcherMap };
