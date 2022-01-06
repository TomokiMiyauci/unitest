// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertExists } from "../dev_deps.ts";
import { AnyBigInt, anyBigInt, isAnyBigInt, isBigInt } from "./any_big_int.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyBigInt", () => {
  const table: [
    ...Parameters<typeof isAnyBigInt>,
    ReturnType<typeof isAnyBigInt>,
  ][] = [
    [1n, true],
    [BigInt(0n), true],
    [BigInt, false],
    [1, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyBigInt(value), result));
});

Deno.test("isBigInt", () => {
  const table: [
    ...Parameters<typeof isBigInt>,
    ReturnType<typeof isBigInt>,
  ][] = [
    [1n, true],
    [0n, true],
    [0, false],
    [1, false],
    ["", false],
    [{}, false],
    [null, false],
  ];

  table.forEach(([value, result]) => assertEquals(isBigInt(value), result));
});

Deno.test("AnyBigInt", () => {
  const anyBigInt = new AnyBigInt();
  assertExists(anyBigInt["toString"]);
  assertExists(anyBigInt[equality]);
  assertEquals(anyBigInt.toString(), "any bigint");
  assertEquals(anyBigInt[equality](false), false);
  assertEquals(anyBigInt[equality](true), false);
  assertEquals(anyBigInt[equality](1n), true);
  assertEquals(anyBigInt[equality](BigInt("1")), true);
  assertEquals(anyBigInt[equality](BigInt), false);
});

Deno.test("anyBigInt", () => {
  assertEquals(anyBigInt(), new AnyBigInt());
});
