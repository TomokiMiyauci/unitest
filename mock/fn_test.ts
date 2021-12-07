// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { fn } from "./fn.ts";
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
  });

  mock();
  assertEquals(mock.mock, {
    calls: [[]],
    results: [{ type: "return", value: undefined }],
  });

  mock(1, 2, 3);
  assertEquals(mock.mock, {
    calls: [[], [1, 2, 3]],
    results: [{ type: "return", value: undefined }, {
      type: "return",
      value: undefined,
    }],
  });
});

Deno.test("should define any function", () => {
  const mock = fn((a: number, b: number) => a + b);

  mock(1, 2);
  assertEquals(mock.mock, {
    calls: [[1, 2]],
    results: [{ type: "return", value: 3 }],
  });

  mock(3, 4);
  assertEquals(mock.mock, {
    calls: [[1, 2], [3, 4]],
    results: [{ type: "return", value: 3 }, { type: "return", value: 7 }],
  });
});
