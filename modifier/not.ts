// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PostModifierContext, PostModifierResult } from "./types.ts";

function not(
  { pass, expectedValue }: PostModifierContext,
): PostModifierResult {
  const expected = pass ? `not ${expectedValue}` : expectedValue;

  return {
    pass: !pass,
    expected,
  };
}

export { not };
