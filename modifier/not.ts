// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type {
  PostModifier,
  PostModifierContext,
  PostModifierResult,
} from "./types.ts";
import { stringify } from "../helper/format.ts";

function predict(
  { pass, expectedValue }: PostModifierContext,
): PostModifierResult {
  const expected = pass ? `[not] ${stringify(expectedValue)}` : undefined;

  return {
    pass: !pass,
    expected,
  };
}

const not: PostModifier = {
  type: "post",
  fn: predict,
};

export { not, predict };
