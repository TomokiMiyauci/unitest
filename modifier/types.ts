// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Matcher, MatchResult } from "../matcher/types.ts";

type ModifierContext<Pre extends boolean> = Pre extends true ? ({
  actual: unknown;
  expected: unknown[];
  matcher: Matcher;
})
  : 
    & {
      actual: unknown;
      expected: unknown[];
      matcher: Matcher;
    }
    & Pick<MatchResult, "pass">
    & { expectedValue: unknown };

type PreModifierContext = ModifierContext<true>;
type PreModifierResult = { actual: unknown };

type PostModifierContext = ModifierContext<false>;
type PostModifierResult = Partial<MatchResult>;

type PostModifierFn = (
  modifierContext: PostModifierContext,
) => PostModifierResult;

type PreModifierFn = (
  modifierContext: PreModifierContext,
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

type PickModifierByType<
  M extends ModifierMap,
  Type extends (PreModifier | PostModifier)["type"],
> = {
  [k in keyof M as (M[k]["type"] extends Type ? k : never)]: M[k];
};

export type {
  ModifierContext,
  ModifierMap,
  PickModifierByType,
  PostModifier,
  PostModifierContext,
  PostModifierFn,
  PostModifierResult,
  PreModifier,
  PreModifierContext,
  PreModifierFn,
  PreModifierResult,
};
