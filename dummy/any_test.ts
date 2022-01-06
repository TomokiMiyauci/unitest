// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { Any, any, equalAnyOf, isAnyString } from "./any.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyString", () => {
  const table: [
    ...Parameters<typeof isAnyString>,
    ReturnType<typeof isAnyString>,
  ][] = [
    ["", true],
    ["test", true],
    [new String("hello"), true],
    [String, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyString(value), result));
});

Deno.test("equalAnyOf", () => {
  const table: [
    ...Parameters<typeof equalAnyOf>,
    ReturnType<typeof equalAnyOf>,
  ][] = [
    ["", String, true],
    ["", Number, false],
    [0, Number, true],
    [0, BigInt, false],
    [0n, BigInt, true],
    [false, Boolean, true],
    [true, Boolean, true],
    [Symbol.for("test"), Symbol, true],
    [() => {}, Function, true],
    [{}, Object, true],
    [[], Object, true],
    [new Date(), Object, true],
    [null, String, false],
    [undefined, String, false],
  ];

  table.forEach(([a, b, result]) => assertEquals(equalAnyOf(a, b), result));
});

Deno.test("Any", () => {
  const any = new Any(String);
  assertExists(any["toString"]);
  assertExists(any["object"]);
  assertExists(any[equality]);
  assertEquals(any.toString(), "Any");
  assertEquals(any[equality](""), true);
});

Deno.test("any", () => {
  assertEquals(any(String), new Any(String));
});
