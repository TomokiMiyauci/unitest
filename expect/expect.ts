// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { jestMatcherMap } from "../matcher/preset.ts";
import { jestModifierMap } from "../modifier/preset.ts";
import { isPromise } from "../deps.ts";
import {
  assert,
  DEFAULT_ACTUAL_HINT,
  DEFAULT_EXPECTED_HINT,
  mergeContext,
} from "./_utils.ts";

import type {
  AnyFn,
  FirstParameter,
  IsPromise,
  OverwriteOf,
  PickOf,
  Resolve,
  ReturnTypePromisifyMap,
  ShiftFnArg,
} from "../_types.ts";
import type { Matcher } from "../matcher/types.ts";
import type {
  ExtractOf,
  PostModifierFn,
  PreModifier,
  PreModifierFn,
  PreModifierResult,
} from "../modifier/types.ts";
import type { ModifierMap } from "../modifier/types.ts";
import type { MatcherMap } from "../matcher/types.ts";

type ShiftFnArgMap<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftFnArg<T[k]>;
};

type MatcherFilter<T, U extends Record<string, Matcher>> = ShiftFnArgMap<
  PickOf<U, (actual: T, ...args: any[]) => unknown>
>;

type FilterPreModifier<
  A,
  T extends ExtractOf<ModifierMap, { type: "pre" }>,
  Promise,
  Sync,
> = {
  [
    k
      in keyof T as (T[k] extends PreModifier
        ? A extends FirstParameter<T[k]["fn"]> ? k : never
        : never)
  ]: T[k] extends PreModifier
    ? IsPromise<ReturnType<T[k]["fn"]>> extends true ? Promise : Sync
    : never;
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
  & FilterPreModifier<
    Actual,
    Pre,
    & ReturnTypePromisifyMap<MatcherFilter<Resolve<Actual>, Matcher>>
    & OverwriteOf<
      Post,
      ReturnTypePromisifyMap<MatcherFilter<Resolve<Actual>, Matcher>>
    >,
    & MatcherFilter<Actual, Matcher>
    & OverwriteOf<
      Post,
      MatcherFilter<Actual, Matcher>
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
    let pre: [PropertyKey, PreModifierFn] | undefined = undefined;
    let post: [PropertyKey, PostModifierFn] | undefined = undefined;

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

        return (...args: readonly unknown[]) => {
          const preModifierContext = {
            matcherArgs: args,
            matcher,
          };
          const expectContext = {
            ...preModifierContext,
            actual,
            actualHint: DEFAULT_ACTUAL_HINT,
            expectedHint: DEFAULT_EXPECTED_HINT,
          };

          /** exec sync match */
          const sync = (
            actual: unknown,
            maybePreResult?: PreModifierResult,
          ) => {
            const matcherArgs = {
              actual: maybePreResult?.actual ?? actual,
              matcherArgs: args,
            };
            const matchResult = matcher(
              matcherArgs.actual,
              ...matcherArgs.matcherArgs,
            );

            const mayBePostModifier = post?.[1];
            const postModifierArgs = {
              ...matcherArgs,
              actualResult: matchResult.actual,
              actualHint: matchResult.actualHint ?? DEFAULT_ACTUAL_HINT,
              matcher,
              expectedHint: matchResult.expectedHint ?? DEFAULT_EXPECTED_HINT,
              pass: matchResult.pass,
              expected: matchResult.expected,
            };
            const maybePostResult = mayBePostModifier?.(postModifierArgs);

            const result = mergeContext({
              expectContext,
              preModifierContext: maybePreResult
                ? {
                  args: { actual, ...preModifierContext },
                  returns: maybePreResult,
                }
                : undefined,
              matcherContext: {
                args: matcherArgs,
                returns: matchResult,
              },
              postModifierContext: maybePostResult
                ? {
                  args: postModifierArgs,
                  returns: maybePostResult,
                }
                : undefined,
            });
            return assert({
              ...result,
              matcherName: String(name),
              preModifierName: pre?.[0],
              postModifierName: post?.[0],
            });
          };

          const maybePreModifier = pre?.[1];
          const maybePreResult = maybePreModifier?.(actual, preModifierContext);

          if (isPromise(maybePreResult)) {
            return maybePreResult.then(
              (preResult) => sync(actual, preResult),
            );
          }
          return sync(actual, maybePreResult);
        };
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

/** Return new `expect` based on another `expect`. All definitions are deep merged.
 * Duplicate fields will be replaced by the new definition.
 * ```ts
 * import {
 *   expect,
 *   extendExpect,
 *   test,
 *   toBeString,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const newExpect = extendExpect(expect, {
 *   matcherMap: {
 *     toBeString,
 *   },
 * });
 *
 * test("should be string", () => {
 *   newExpect("unitest").toBeString();
 * });
 * ```
 */
function extendExpect<
  Matcher extends MatcherMap,
  Modifier extends ModifierMap,
  NewMatcher extends MatcherMap,
  NewModifier extends ModifierMap,
>(
  expect: Expect<Matcher, Modifier>,
  {
    modifierMap: newModifierMap = {} as NewModifier,
    matcherMap: newMatcherMap = {} as NewMatcher,
  }: Partial<Definition<NewMatcher, NewModifier>>,
) {
  const { modifierMap = {}, matcherMap } = expect.getDefinition();

  return defineExpect<
    Matcher & NewMatcher,
    NewModifier extends ModifierMap ? Modifier & NewModifier : Modifier
  >({
    matcherMap: {
      ...matcherMap,
      ...newMatcherMap,
    },
    modifierMap: {
      ...modifierMap,
      ...newModifierMap as NewModifier extends ModifierMap
        ? Modifier & NewModifier
        : Modifier,
    },
  });
}

export { defineExpect, expect, extendExpect };
export type { Expected, MatcherMap };
