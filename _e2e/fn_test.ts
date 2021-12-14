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

test("should define resolved value as default", () => {
  const mockObject = fn().defaultResolvedValue(1);
  expect(mockObject()).toEqual(Promise.resolve(1));
});

test("should define resolved value as only once", () => {
  const mockObject = fn().onceResolvedValue(2).defaultReturnValue(1);
  expect(mockObject()).toEqual(Promise.resolve(2));
  expect(mockObject()).toBe(1);
});

test("should define rejected value as default", async () => {
  const mockObject = fn().defaultRejectedValue(Error("error"));
  await expect(mockObject()).rejects.toEqual(Error("error"));
});

test("should define rejected value as only once", async () => {
  const mockObject = fn().onceRejectedValue(Error("test"));
  await expect(mockObject()).rejects.toEqual(Error("test"));
  expect(mockObject()).not.toBeDefined();
});

test("should clear mock", () => {
  const mockObject = fn(() => 1);
  mockObject();

  expect(mockObject).toHaveReturnedWith(1);
  mockObject.mockClear();
  expect(mockObject).not.toHaveReturnedWith(1);
});

test("should clear mock and all registered once implementations and default", () => {
  const mockObject = fn(() => 1);
  mockObject();

  expect(mockObject).toHaveReturnedWith(1);

  mockObject.reset();
  expect(mockObject).not.toHaveBeenCalled();

  mockObject();
  expect(mockObject).toHaveReturnedWith(undefined);
});
