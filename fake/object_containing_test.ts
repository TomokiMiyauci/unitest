// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  containRecord,
  ObjectContaining,
  objectContaining,
} from "./object_containing.ts";
import { assertEquals, assertThrows } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("containRecord", () => {
  const table: [
    ...Parameters<typeof containRecord>,
    ReturnType<typeof containRecord>,
  ][] = [
    [{}, {}, true],
    [{ a: 1 }, {}, true],
    [{ a: 1 }, { b: 1 }, false],
    [{ a: 1 }, { a: 1 }, true],
    [{ a: 1 }, { b: 1, a: 1 }, false],
    [{ a: 1 }, { a: {} }, false],
    [{ a: {} }, { a: {} }, true],
    [{ a: {}, b: [], c: null, d: undefined }, { a: {} }, true],
    [{ a: {}, b: [], c: null, d: undefined }, {
      c: null,
      b: [],
      a: {},
      d: undefined,
    }, true],
    [{ a: {}, b: [], c: null, d: undefined }, {
      c: null,
      b: [],
      a: {},
      d: undefined,
    }, true],
  ];

  table.forEach(([a, b, result]) => assertEquals(containRecord(a, b), result));
});

Deno.test("objectContaining", () => {
  assertEquals(
    objectContaining({}),
    new ObjectContaining({}),
  );
});

Deno.test("ObjectContaining", () => {
  assertThrows(
    () => new ObjectContaining({})[equality](""),
    TypeError,
    "Actual must be object",
  );

  assertEquals(
    new ObjectContaining({})[equality]({}),
    true,
  );

  assertEquals(
    new ObjectContaining({}).toString(),
    "object contain",
  );
});
