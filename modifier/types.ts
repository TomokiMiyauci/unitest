// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type {
  Matcher,
  MatchResult,
  RenamedMatchResult,
} from "../matcher/types.ts";

type PreModifierContext = {
  matcherArgs: readonly unknown[];
  matcher: Matcher;
};

type PreModifierResult<T = unknown> = { actual: T };

type PostModifierContext =
  & {
    actual: unknown;
    matcherArgs: readonly unknown[];
    matcher: Matcher;
  }
  & Required<
    RenamedMatchResult
  >;
type PostModifierResult = Partial<MatchResult>;

type PostModifierFn = (
  modifierContext: PostModifierContext,
) => PostModifierResult;

type PreModifierFn<
  T = any,
  R extends PreModifierResult<unknown> | Promise<PreModifierResult<unknown>> =
    | PreModifierResult<unknown>
    | Promise<PreModifierResult<unknown>>,
> = (
  actual: T,
  preModifierContext: PreModifierContext,
) => R;

type PreModifier<
  Actual,
  ReturnActual extends
    | PreModifierResult<unknown>
    | Promise<PreModifierResult<unknown>>,
> = {
  type: "pre";
  fn: PreModifierFn<Actual, ReturnActual>;
};

type PostModifier = {
  type: "post";
  fn: PostModifierFn;
};

type ModifierMap<
  T = any,
  Return extends
    | PreModifierResult<unknown>
    | Promise<PreModifierResult<unknown>> =
      | PreModifierResult<unknown>
      | Promise<PreModifierResult<unknown>>,
> = Record<
  PropertyKey,
  PreModifier<
    T,
    Return
  > | PostModifier
>;

type ExtractOf<T extends ModifierMap, U> = {
  [k in keyof T as (T[k] extends U ? k : never)]: T[k];
};

export type {
  ExtractOf,
  ModifierMap,
  PostModifier,
  PostModifierContext,
  PostModifierFn,
  PostModifierResult,
  PreModifier,
  PreModifierContext,
  PreModifierFn,
  PreModifierResult,
};
