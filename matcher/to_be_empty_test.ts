// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { isEmpty, isIterable, toBeEmpty } from "./to_be_empty.ts";

Deno.test({
  name: "isIterable",
  fn: () => {
    const table: [object, boolean][] = [
      [{}, false],
      [[], true],
      [new Map(), true],
      [new Set(), true],
      [new Map(), true],
      [new Int8Array(), true],
      [new Int16Array(), true],
      [new WeakRef([]), false],
      [new WeakSet(), false],
      [new WeakMap(), false],
    ];

    table.forEach(([value, result]) => assertEquals(isIterable(value), result));
  },
});

Deno.test({
  name: "isEmpty",
  fn: () => {
    const table: [...Parameters<typeof isEmpty>, boolean][] = [
      ["", true],
      [" ", false],
      [[], true],
      [{}, true],
      [{ a: 1 }, false],
      [{ [Symbol.for("test")]: 1 }, false],
      [[1], false],
      [new Map(), true],
      [new Map([[1, 2]]), false],
      [new Set(), true],
      [new Set([1]), false],
      [new Int8Array(), true],
      [new Int8Array(1), false],
      [new Uint8Array(), true],
      [new Uint8Array(1), false],
      [new Uint8ClampedArray(), true],
      [new Uint8ClampedArray(1), false],
      [new Int16Array(), true],
      [new Int16Array(1), false],
      [new Uint16Array(), true],
      [new Uint16Array(1), false],
      [new Int32Array(), true],
      [new Int32Array(1), false],
      [new Uint32Array(), true],
      [new Uint32Array(1), false],
      [new Float32Array(), true],
      [new Float32Array(1), false],
      [new Float64Array(), true],
      [new Float64Array(1), false],
    ];

    table.forEach(([value, result]) => assertEquals(isEmpty(value), result));
  },
});

Deno.test({
  name: "toBeEmpty",
  fn: () => {
    assertSuccess(toBeEmpty(""));
    assertSuccess(toBeEmpty([]));
    assertSuccess(toBeEmpty(new Map()));
    assertSuccess(toBeEmpty({}));
    assertFail(toBeEmpty([1]));

    assertEquals(toBeEmpty({}), {
      pass: true,
      expected: "empty",
    });
  },
});
