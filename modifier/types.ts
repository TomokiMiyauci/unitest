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

type PreModifierResult = { actual: unknown };

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

type PreModifierFn<T = any> = (
  actual: T,
  preModifierContext: PreModifierContext,
) => PreModifierResult | Promise<PreModifierResult> | never;

type PostModifier = {
  type: "post";
  fn: PostModifierFn;
};

type PreModifier = {
  type: "pre";
  fn: PreModifierFn;
};

type ModifierMap = Record<string | symbol, PreModifier | PostModifier>;

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
