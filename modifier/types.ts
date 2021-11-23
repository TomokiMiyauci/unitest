// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Matcher, MatchResult } from "../matcher/types.ts";

type PreModifierContext = {
  actual: unknown;
  expected: unknown[];
  matcher: Matcher;
};

type PreModifierResult = { actual: unknown };

type PostModifierContext =
  & {
    actual: unknown;
    expected: unknown[];
    matcher: Matcher;
  }
  & Pick<MatchResult, "pass">
  & { expectedValue: MatchResult["expected"] };
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
