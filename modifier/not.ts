// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { blue } from "../deps.ts";
import type {
  PostModifier,
  PostModifierContext,
  PostModifierResult,
} from "./types.ts";

function predict(
  { pass, expectedHint }: PostModifierContext,
): PostModifierResult {
  return {
    pass: !pass,
    expectedHint: `${expectedHint} ${blue("[not]")}`,
  };
}

const not: PostModifier = {
  type: "post",
  fn: predict,
};

export { not, predict };
