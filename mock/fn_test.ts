// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { fn, MockFnStore } from "./fn.ts";
import { isFunction } from "../deps.ts";
import { assert, assertEquals, assertExists } from "../dev_deps.ts";

Deno.test("non implemented fn accept any args", () => {
  const mock = fn();

  assert(isFunction(mock));
  assertExists(mock.mock);
  assertExists(mock.mock.calls);
  assertExists(mock.mock.results);

  assertEquals(mock.mock, {
    calls: [],
    results: [],
    callOrderNumbers: [],
  });

  mock();
  assertEquals(mock.mock, {
    calls: [[]],
    results: [{ type: "return", value: undefined }],
    callOrderNumbers: [1],
  });

  mock(1, 2, 3);
  assertEquals(mock.mock, {
    calls: [[], [1, 2, 3]],
    results: [{ type: "return", value: undefined }, {
      type: "return",
      value: undefined,
    }],
    callOrderNumbers: [1, 2],
  });
});

Deno.test("should define any function", () => {
  const mock = fn((a: number, b: number) => a + b);

  mock(1, 2);
  assertEquals(mock.mock, {
    calls: [[1, 2]],
    results: [{ type: "return", value: 3 }],
    callOrderNumbers: [3],
  });

  mock(3, 4);
  assertEquals(mock.mock, {
    calls: [[1, 2], [3, 4]],
    results: [{ type: "return", value: 3 }, { type: "return", value: 7 }],
    callOrderNumbers: [3, 4],
  });
});

Deno.test("mockObject should return value", () => {
  const mockObject = fn();

  assertEquals(mockObject(), undefined);
  const mockObject2 = fn(() => true);
  assertEquals(mockObject2(), true);
});

Deno.test("setImplementation", () => {
  assertExists(fn().setImplementation);

  const f1 = fn();
  const mockObject = fn(f1);

  mockObject();

  assertEquals(f1.mock.calls.length, 1);
  const f2 = fn();
  mockObject.setImplementation(f2);
  mockObject();
  assertEquals(f1.mock.calls.length, 1);
  assertEquals(f2.mock.calls.length, 1);
});

Deno.test("onceImplementation should call only one time", () => {
  assertExists(fn().onceImplementation);

  const mockObject = fn();

  const onceImplementation = fn();
  mockObject.onceImplementation(onceImplementation);

  assertEquals(mockObject(), undefined);
  assertEquals(onceImplementation.mock.calls.length, 1);
  mockObject();
  assertEquals(onceImplementation.mock.calls.length, 1);
});

Deno.test("onceImplementation should be called in preference to default implementation", () => {
  const defaultImplementation = fn();
  const onceImplementation = fn();
  const mockObject = fn(defaultImplementation).onceImplementation(
    onceImplementation,
  );

  assertEquals(defaultImplementation.mock.calls.length, 0);
  assertEquals(onceImplementation.mock.calls.length, 0);

  mockObject();

  assertEquals(defaultImplementation.mock.calls.length, 0);
  assertEquals(onceImplementation.mock.calls.length, 1);

  mockObject();
  assertEquals(defaultImplementation.mock.calls.length, 1);
  assertEquals(onceImplementation.mock.calls.length, 1);

  mockObject();
  assertEquals(defaultImplementation.mock.calls.length, 2);
  assertEquals(onceImplementation.mock.calls.length, 1);
});

Deno.test("MockFnStore", () => {
  const store = new MockFnStore();
  assertExists(store["pickImplementation"]);
  assertEquals(store["onceImplementations"], []);
  assertEquals(store["defaultImplementation"], undefined);
  assertEquals(store.pickImplementation(), undefined);
});

Deno.test("MockFnStore should return picked implementation", () => {
  const mockObject = fn();
  const store = new MockFnStore(mockObject);

  assertEquals(
    store["defaultImplementation"],
    mockObject,
  );
  assertEquals(
    store.pickImplementation(),
    mockObject,
  );
  assertEquals(
    store.pickImplementation(),
    mockObject,
  );
  const mockObject2 = fn();
  store["onceImplementations"].unshift(mockObject2);
  assertEquals(
    store.pickImplementation(),
    mockObject2,
  );
  assertEquals(
    store.pickImplementation(),
    mockObject,
  );
});
