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

type PreModifier = (
  modifierContext: PreModifierContext,
) => PreModifierResult | Promise<PreModifierResult>;

type PostModifierContext = ModifierContext<false>;
type PostModifierResult = MatchResult;

type PostModifier = (
  modifierContext: PostModifierContext,
) => MatchResult;

type ModifierMap = {
  pre?: Record<string | symbol, PreModifier>;
  post?: Record<string | symbol, PostModifier>;
};

export type {
  ModifierContext,
  ModifierMap,
  PostModifier,
  PostModifierContext,
  PostModifierResult,
  PreModifier,
  PreModifierContext,
  PreModifierResult,
};
