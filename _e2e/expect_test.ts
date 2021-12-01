// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  any,
  anything,
  defineExpect,
  expect,
  objectContaining,
  test,
  toStartWith,
  toThrow,
} from "../mod.ts";

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

test("anything", () => {
  expect({}).toEqual(anything());
});

test("objectContaining", () => {
  expect({ a: 1, b: "any" }).toEqual(
    objectContaining({ a: any(Number), b: any(String) }),
  );
});
