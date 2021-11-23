// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PostModifier } from "./types.ts";

const not: PostModifier = {
  type: "post",
  fn: ({ pass, expectedValue }) => {
    const expected = pass ? `not ${expectedValue}` : expectedValue;

    return {
      pass: !pass,
      expected,
    };
  },
};

export { not };
