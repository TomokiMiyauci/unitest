// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  any,
  anyNumber,
  anyOf,
  anyString,
  anything,
  expect,
  objectContaining,
  stringContaining,
  stringMatching,
  test,
} from "../mod.ts";

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

test("should be any of mixed fake object", () => {
  expect("").toEqual(anyOf([anyNumber(), anyString()]));
  expect({}).not.toEqual(anyOf([anyNumber(), anyString()]));
});
