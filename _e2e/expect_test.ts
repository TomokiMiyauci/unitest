// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  any,
  anyNumber,
  anyString,
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

test("should any string", () => {
  expect("hello! This is a good day.").toEqual(anyString());
});

test("should any number", () => {
  expect(1).toEqual(anyNumber());
});

test("should any number", () => {
  expect({ a: 1 }).toEqual({ a: anyNumber() });
});

test("should any object", () => {
  expect({}).toEqual(any(Object));
});

test("should {} object", () => {
  expect({ a: {} }).toEqual({ a: {} });
});

test("should { a: {} } object", () => {
  expect({ a: {} }).toEqual({ a: any(Object) });
});
