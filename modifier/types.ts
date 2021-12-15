// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Matcher, MatchResult } from "../matcher/types.ts";

type PreModifierContext<T = unknown> = {
  actual: T;
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
  & Pick<MatchResult, "pass" | "expected" | "expectedHint" | "actualHint">;
type PostModifierResult = Partial<MatchResult>;

type PostModifierFn = (
  modifierContext: PostModifierContext,
) => PostModifierResult;

type PreModifierFn = (
  modifierContext: {
    actual: any;
    matcherArgs: readonly unknown[];
    matcher: Matcher;
  },
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

type valueOf<T> = T[keyof T];

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
