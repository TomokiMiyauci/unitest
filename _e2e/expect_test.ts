// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  any,
  anything,
  defineExpect,
  expect,
  objectContaining,
  stringContaining,
  stringMatching,
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

test("should be match pattern", () => {
  expect("hello! This is a good day.").toEqual(stringMatching(/good/));
});

test("should contain pattern", () => {
  expect("hello! This is a good day.").toEqual(stringContaining("good"));
});
