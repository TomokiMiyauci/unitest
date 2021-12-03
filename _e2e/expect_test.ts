// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect, expect, test, toStartWith, toThrow } from "../mod.ts";

test({
  name: "should not occur error",
  fn: () => {
    expect({ a: "" }).toHaveProperty("a");
  },
});

test({
  name: "toStartWith",
  fn: () => {
    const expect = defineExpect({
      matcherMap: {
        toStartWith,
        toThrow,
      },
    });

    expect("abcde").toStartWith("abc");
  },
});
