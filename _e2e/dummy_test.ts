// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  any,
  anyArray,
  anyBoolean,
  anyFunction,
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
import { isEven } from "../deps.ts";

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

test("should be any of mixed dummy object", () => {
  expect("").toEqual(anyOf([anyNumber(), anyString()]));
  expect({}).not.toEqual(anyOf([anyNumber(), anyString()]));
});

test("should be any boolean", () => {
  expect({
    a: false,
  }).toEqual({
    a: anyBoolean(),
  });

  expect({
    a: 1,
  }).not.toEqual({
    a: anyBoolean(),
  });
});

test("should be any array", () => {
  expect({
    a: [],
  }).toEqual({
    a: anyArray(),
  });

  expect({
    trades: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  }).toEqual({
    trades: anyArray(anyArray(anyNumber())),
  });

  expect({
    trades: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  }).not.toEqual({
    trades: anyArray(anyArray(anyString())),
  });

  expect({
    trades: [
      { price: 100, amount: 200 },
      { price: 200, amount: 400 },
      { price: 400, amount: 800 },
    ],
  }).toEqual({
    trades: anyArray({ price: anyNumber(), amount: anyNumber() }),
  });
});

test("should be any function", () => {
  expect(() => {}).toEqual(anyFunction());
});

const isUpper = (value: string): boolean => /^[A-Z]+$/.test(value);
test("should be upperCase string", () => {
  expect("HELLO").toEqual(anyString(isUpper));
});

test("should be even", () => {
  expect(2).toEqual(anyNumber(isEven));
});
