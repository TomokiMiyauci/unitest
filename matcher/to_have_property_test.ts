// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import {
  _assetHint,
  _hint,
  constructPath,
  extractPath,
  toHaveProperty,
} from "./to_have_property.ts";

Deno.test("_hint", () => {
  assertEquals(_hint(true), "path -> value");
  assertEquals(_hint(false), "path");
});

Deno.test("_assetHint", () => {
  assertEquals(_assetHint(true, "hello"), ` -> "hello"`);
  assertEquals(_assetHint(true, 1), " -> 1");
  assertEquals(_assetHint(false, 1), "");
  assertEquals(_assetHint(false, "hello"), "");
});

Deno.test({
  name: "constructPath",
  fn: () => {
    const symbol = Symbol.for("test");
    const table: [
      ...Parameters<typeof constructPath>,
      ReturnType<typeof constructPath>,
    ][] = [[
      [],
      [],
    ], [
      ["a"],
      ["a"],
    ], [
      ["a"],
      ["a"],
    ], [
      ["a"],
      ["a"],
    ], [
      ["a", "b"],
      ["a", "b"],
    ], [
      ["a", "b", "c"],
      ["a", "b", "c"],
    ], [
      ["a", "b"],
      ["a", "b"],
    ], [
      [1],
      [1],
    ], [
      [symbol],
      [symbol],
    ], [
      "a",
      ["a"],
    ], [
      "b",
      ["b"],
    ], [
      1,
      [1],
    ], [
      "1",
      ["1"],
    ], [
      1,
      [1],
    ], [
      symbol,
      [symbol],
    ], [
      "a.b.c",
      ["a", "b", "c"],
    ]];

    table.forEach(([keyPath, result]) =>
      assertEquals(constructPath(keyPath), result)
    );
  },
});

Deno.test("extractPath", () => {
  const table: [
    ...Parameters<typeof extractPath>,
    ReturnType<typeof extractPath>,
  ][] = [
    [[], {}, []],
    [["a"], {}, []],
    [["a"], { a: "b" }, ["a"]],
    [["a", "b"], { a: { b: {} } }, ["a", "b"]],
    [["a", "b", "d"], { a: { b: {} } }, ["a", "b"]],
    [["a", "b", "c"], { a: { b: { c: {} } } }, ["a", "b", "c"]],
    [["a", "b", "c", "d"], { a: { b: { c: {} } } }, ["a", "b", "c"]],
  ];

  table.forEach(([keyPath, value, result]) =>
    assertEquals(extractPath(keyPath, value), result)
  );
});

Deno.test({
  name: "toHaveProperty",
  fn: () => {
    assertSuccess(toHaveProperty({ a: 1 }, ["a"]));
    assertSuccess(
      toHaveProperty({ a: { b: { c: undefined } } }, ["a", "b", "c"]),
    );
    assertSuccess(toHaveProperty({ a: 1 }, "a"));
    assertSuccess(toHaveProperty({ a: { b: { c: {} } } }, "a.b.c"));
    assertSuccess(toHaveProperty({ "a.b.c": { b: undefined } }, ["a.b.c"]));
    assertFail(toHaveProperty({}, []));
    assertFail(toHaveProperty({ a: { b: undefined } }, "a.b.c"));

    assertEquals(toHaveProperty({ a: { b: undefined } }, "a.b.c"), {
      pass: false,
      resultActual: "a.b",
      actualHint: "Actual path:",
      expected: "a.b.c",
      expectedHint: "Expected path:",
    });

    assertEquals(toHaveProperty({ a: { b: { c: "d" } } }, "a.b.c", "e"), {
      pass: false,
      resultActual: `a.b.c -> "d"`,
      actualHint: "Actual path -> value:",
      expected: `a.b.c -> "e"`,
      expectedHint: "Expected path -> value:",
    });

    assertEquals(toHaveProperty({ a: { b: { c: "d" } } }, "a.b.c", undefined), {
      pass: false,
      resultActual: `a.b.c -> "d"`,
      actualHint: "Actual path -> value:",
      expected: `a.b.c -> undefined`,
      expectedHint: "Expected path -> value:",
    });
  },
});
