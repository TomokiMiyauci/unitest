// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type {
  PostModifier,
  PostModifierContext,
  PostModifierResult,
} from "./types.ts";
import { stringify } from "../helper/format.ts";

function predict(
  { pass, expected }: PostModifierContext,
): PostModifierResult {
  return {
    pass: !pass,
    expected: pass ? `[not] ${stringify(expected)}` : expected,
  };
}

const not: PostModifier = {
  type: "post",
  fn: predict,
};

export { not, predict };
