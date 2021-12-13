// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, fn, test } from "../mod.ts";

test("should define implementation as default", () => {
  const mockObject = fn().defaultImplementation(() => true);
  expect(mockObject()).toBe(true);
});

test("should define implementation as only once", () => {
  const mockObject = fn(() => 0).onceImplementation(() => 1);
  expect(mockObject()).toBe(1);
  expect(mockObject()).toBe(0);
});

test("should define return value as default", () => {
  const mockObject = fn(() => 1).defaultReturnValue(0);
  expect(mockObject()).toBe(0);
});

test("should define return value as only once", () => {
  const mockObject = fn(() => 1).onceReturnValue(0);
  expect(mockObject()).toBe(0);
  expect(mockObject()).toBe(1);
});

test("should define return value as default", () => {
  const mockObject = fn().defaultResolvedValue(1);
  expect(mockObject()).toEqual(Promise.resolve(1));
});
