// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { fn, isMockObject } from "./fn.ts";
import { isFunction } from "../deps.ts";
import { expect } from "../expect/mod.ts";
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

Deno.test("defaultImplementation", () => {
  assertExists(fn().defaultImplementation);

  const f1 = fn();
  const mockObject = fn(f1);

  mockObject();

  assertEquals(f1.mock.calls.length, 1);
  const f2 = fn();
  mockObject.defaultImplementation(f2);
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

  const mock = fn().onceImplementation(() => 1).onceImplementation(() => 2);

  assertEquals(mock(), 1);
  assertEquals(mock(), 2);
  assertEquals(mock(), undefined);
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

Deno.test("defaultReturnValue", () => {
  assertExists(fn().defaultReturnValue);
  assertEquals(fn().defaultReturnValue(1)(), 1);

  assertEquals(fn().defaultImplementation(() => 2).defaultReturnValue(1)(), 1);
  assertEquals(fn().defaultReturnValue(1).defaultImplementation(() => 2)(), 2);

  const mockObject = fn();
  mockObject.defaultImplementation(() => 2).defaultReturnValue(1);

  mockObject(1, 2, 3);

  assertEquals(mockObject.mock.calls, [[1, 2, 3]]);
  assertEquals(mockObject.mock.results, [{ type: "return", value: 1 }]);
});

Deno.test("onceReturnValue", () => {
  assertExists(fn().onceReturnValue);
  assertEquals(fn().onceReturnValue(1)(), 1);

  const mockObject = fn();

  mockObject.onceReturnValue(1).onceReturnValue(2).onceImplementation(() => 3);

  assertEquals(mockObject(), 1);
  assertEquals(mockObject(), 2);
  assertEquals(mockObject(), 3);
  assertEquals(mockObject(), undefined);
});

Deno.test("defaultResolvedValue", async () => {
  assertExists(fn().defaultResolvedValue);
  assertEquals(fn().defaultResolvedValue(1)(), Promise.resolve(1));

  const mockObject = fn(() => 1).defaultResolvedValue(2);
  assertEquals(await mockObject(), 2);

  assertEquals(mockObject.mock.results, [{
    type: "return",
    value: Promise.resolve(2),
  }]);
});

Deno.test("onceResolvedValue", async () => {
  assertExists(fn().onceResolvedValue);

  const mockObject = fn(() => 1).onceResolvedValue(2);

  assertEquals(mockObject(), Promise.resolve(2));
  assertEquals(mockObject(), 1);

  const mock = fn().onceResolvedValue(100);

  assertEquals(await mock(), 100);

  assertEquals(mock.mock.results, [{
    type: "return",
    value: Promise.resolve(100),
  }]);
});

Deno.test("defaultRejectedValue", async () => {
  assertExists(fn().defaultRejectedValue);

  const mockObject = fn().defaultRejectedValue(Error("test"));

  assertEquals(await mockObject().catch((e) => e), Error("test"));

  assertEquals(mockObject.mock.results, [{
    type: "return",
    value: Promise.resolve(Error("test")),
  }]);
  assertEquals(await mockObject().catch((e) => e), Error("test"));
});

Deno.test("onceRejectedValue", async () => {
  assertExists(fn().onceRejectedValue);

  await expect(fn().onceRejectedValue(Error("test"))() as Promise<never>)
    .rejects.toBeInstanceOf(
      Error,
    );

  const mockObject = fn().onceRejectedValue(Error("test")).onceRejectedValue(
    Error("test2"),
  );

  await expect(mockObject() as Promise<never>).rejects.toEqual(Error("test"));
  await expect(mockObject() as Promise<never>).rejects.toEqual(
    Error("test2"),
  );
  await expect(mockObject() as Promise<never>).rejects.not.toBeDefined();
});

Deno.test("mockClear", () => {
  assertExists(fn().mockClear);

  const mockObject = fn(() => 1);
  mockObject();

  assertEquals(mockObject.mock.calls.length, 1);
  assertEquals(mockObject.mock.results.length, 1);
  assertEquals(mockObject.mock.results, [{ type: "return", value: 1 }]);
  assertEquals(mockObject.mock.callOrderNumbers.length, 1);

  mockObject.mockClear();
  assertEquals(mockObject.mock.calls.length, 0);
  assertEquals(mockObject.mock.results.length, 0);
  assertEquals(mockObject.mock.callOrderNumbers.length, 0);

  mockObject();

  assertEquals(mockObject.mock.calls.length, 1);
  assertEquals(mockObject.mock.results.length, 1);
  assertEquals(mockObject.mock.results, [{ type: "return", value: 1 }]);
  assertEquals(mockObject.mock.callOrderNumbers.length, 1);
});

Deno.test("reset", () => {
  assertExists(fn().reset);

  const mockObject = fn(() => 1);
  mockObject();

  assertEquals(mockObject.mock.calls.length, 1);
  assertEquals(mockObject.mock.results.length, 1);
  assertEquals(mockObject.mock.results, [{ type: "return", value: 1 }]);
  assertEquals(mockObject.mock.callOrderNumbers.length, 1);

  mockObject.reset();
  assertEquals(mockObject.mock.calls.length, 0);
  assertEquals(mockObject.mock.results.length, 0);
  assertEquals(mockObject.mock.callOrderNumbers.length, 0);

  mockObject();

  assertEquals(mockObject.mock.calls.length, 1);
  assertEquals(mockObject.mock.results.length, 1);
  assertEquals(mockObject.mock.results, [{ type: "return", value: undefined }]);
  assertEquals(mockObject.mock.callOrderNumbers.length, 1);
});

Deno.test("reset should clear once implementation and default", () => {
  const mockObject = fn(() => 1).onceReturnValue(2).reset();

  assertEquals(mockObject(), undefined);
  assertEquals(mockObject(), undefined);
});

Deno.test("isMockObject", () => {
  const table: [
    ...Parameters<typeof isMockObject>,
    ReturnType<typeof isMockObject>,
  ][] = [
    [{}, false],
    [[], false],
    [{ mock: {} }, false],
    [{
      mock: {
        results: [],
        callOrderNumbers: [],
      },
    }, false],
    [{
      mock: {
        callOrderNumbers: [],
      },
    }, false],
    [{
      mock: {
        calls: [],
        results: [],
        callOrderNumbers: [],
      },
    }, true],
    [{
      mock: {
        calls: [[1]],
        results: [{ type: "return", value: 1 }],
        callOrderNumbers: [1],
      },
    }, true],
    [fn(), true],
  ];

  table.forEach(([value, result]) => assertEquals(isMockObject(value), result));
});
