// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineGlobalThis, each, expect, fn, test } from "../mod.ts";

test("should work as jest style", () => {
  expect("jest").toBeTruthy();
});

test({
  name: "should work Deno.test sytle",
  fn: () => {
    expect("deno").toBeTruthy();
  },
});

test({
  name: "setupMap",
  fn: ({ fetchMock }) => {
    expect(fetchMock.mockObject).toBeDefined();
    expect(fetchMock.mockObject).toHaveBeenCalled();
  },
  setupMap: {
    fetchMock: () => {
      const mockObject = fn();
      mockObject();
      return {
        localThis: {
          mockObject,
        },
      };
    },
  },
});

test({
  name: "setupMapMultiple",
  fn: ({ fetchMock, navigation }) => {
    expect(fetchMock).toBeDefined();
    expect(fetchMock.mockObject).toBeDefined();
    expect(fetchMock.mockObject).toHaveBeenCalled();
    expect(navigation).toBeDefined();
    expect(navigation.mockObject).toBeDefined();
    expect(navigation.mockObject).toHaveBeenCalled();
  },
  setupMap: {
    fetchMock: () => {
      const mockObject = fn();
      mockObject();
      return {
        localThis: {
          mockObject,
        },
      };
    },
    navigation: () => {
      const mockObject = fn();
      mockObject();
      return {
        localThis: {
          mockObject,
        },
      };
    },
  },
});

test({
  name: "should request actual",
  setupMap: {
    fetch: () => {
      const mockObject = fn();
      const reset = defineGlobalThis(
        "fetch",
        (input, init) => {
          mockObject(input, init);
          return Promise.resolve(new Response("test"));
        },
      );
      return {
        localThis: { mockObject },
        teardown: reset,
      };
    },
  },

  fn: async ({ fetch: { mockObject } }) => {
    await fetch("https://unitest.verce.app/");

    expect(mockObject).toHaveBeenCalledWith(
      "https://unitest.verce.app/",
      undefined,
    );
  },
});

function double(value: number): number {
  return value * 2;
}

each([[1, 2], [100, 200]])(
  "double(%d) => %d",
  (actual, expected) => {
    expect(double(actual)).toBe(expected);
  },
);
