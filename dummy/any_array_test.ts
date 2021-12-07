// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyArray, anyArray, equalAnyArray } from "./any_array.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { anyString } from "./any_string.ts";
import { anyOf } from "./any_of.ts";
import { anyNumber } from "./any_number.ts";
import { equality } from "../helper/equal.ts";

Deno.test("equalAnyArray", () => {
  const table: [
    ...Parameters<typeof equalAnyArray>,
    ReturnType<typeof equalAnyArray>,
  ][] = [
    [[], undefined, true],
    [[1, 2, {}], undefined, true],
    [{}, undefined, false],
    [[{ a: 1 }], { a: 1 }, true],
    [[1], 1, true],
    [[1, 2, 3], 1, false],
    [[1, 1, 1], 1, true],
    [[1, 1, 1], anyString(), false],
    [["", "deno", "node"], anyString(), true],
    [[{ a: "" }], { a: anyString() }, true],
    [[{ a: 1 }], { a: 2 }, false],
    [[1, 2, "", "test"], anyOf([anyString(), anyNumber()]), true],
    [[1, 2, "", "test", false], anyOf([anyString(), anyNumber()]), false],
  ];

  table.forEach(([a, b, result]) => assertEquals(equalAnyArray(a, b), result));
});

Deno.test("AnyArray", () => {
  const anyArray = new AnyArray();

  assertExists(anyArray["toString"]);
  assertExists(anyArray[equality]);
  assertEquals(anyArray.toString(), "any array");
  assertEquals(new AnyArray({ a: 2 })[equality]([{ a: 1 }]), false);
});

Deno.test("anyArray", () => {
  assertEquals(anyArray([]), new AnyArray([]));
});
