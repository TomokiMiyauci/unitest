// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  defineExpect,
  it,
  toHaveProperty,
  toStartWith,
  toThrow,
} from "../mod.ts";

const expect = defineExpect({
  matcherMap: {
    toHaveProperty,
  },
});

it("should not occur error", () => {
  expect({ a: "" }).toHaveProperty("a");
});

it("toStartWith", () => {
  const expect = defineExpect({
    matcherMap: {
      toStartWith,
      toThrow,
    },
  });

  expect("abcde").toStartWith("abc");
});
