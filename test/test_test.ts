// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { _applySetup, _localThisReducer, test } from "./test.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals, assertThrows } from "../dev_deps.ts";

Deno.test("_applySetup", () => {
  const mockObject = fn();

  const table: [
    ...Parameters<typeof _applySetup>,
    ReturnType<typeof _applySetup>,
  ][] = [
    [["", () => ({})], { name: "" }],
    [["test", () => ({})], { name: "test" }],
    [["test", () => ({
      localThis: {},
    })], { name: "test", localThis: {} }],
    [["test", () => ({
      localThis: {
        a: {},
      },
    })], {
      name: "test",
      localThis: {
        a: {},
      },
    }],
    [["test", () => ({
      localThis: {
        a: {},
        b: { foo: "bar" },
      },
    })], {
      name: "test",
      localThis: {
        a: {},
        b: { foo: "bar" },
      },
    }],
    [["test", () => ({
      teardown: mockObject,
    })], {
      name: "test",
      teardown: mockObject,
    }],
  ];

  table.forEach(([value, result]) => assertEquals(_applySetup(value), result));
});

Deno.test("_localThisReducer", () => {
  const table: [
    ...Parameters<typeof _localThisReducer>,
    ReturnType<typeof _localThisReducer>,
  ][] = [
    [{}, { name: "" }, {}],
    [{}, { name: "test" }, {}],
    [{}, { name: "test", localThis: {} }, {
      test: {},
    }],
    [{}, {
      name: "test",
      localThis: {
        abc: {},
      },
    }, {
      test: {
        abc: {},
      },
    }],
    [{ a: {} }, {
      name: "test",
      localThis: {
        abc: {},
        def: {},
      },
    }, {
      test: {
        abc: {},
        def: {},
      },
      a: {},
    }],
  ];

  table.forEach(([acc, cur, result]) =>
    assertEquals(_localThisReducer(acc, cur), result)
  );
});

Deno.test("_applySetup call callback function", () => {
  const mock = fn();
  _applySetup(["", () => {
    mock();
    return {};
  }]);

  assertEquals(mock.mock.calls.length, 1);
});

Deno.test("should throw when test name is empty", () => {
  const mock = fn();

  assertThrows(() => test("", mock));
});

Deno.test("should not throw any error", () => {
  assertEquals(
    test("any error", () => {
      throw Error("error");
    }),
    undefined,
  );
});
