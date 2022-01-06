// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";
import { AnySymbol, anySymbol, isAnySymbol } from "./any_symbol.ts";

Deno.test("isAnySymbol", () => {
  const table: [
    ...Parameters<typeof isAnySymbol>,
    ReturnType<typeof isAnySymbol>,
  ][] = [
    [Symbol.for(""), true],
    [Symbol("test"), true],
    [Symbol, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnySymbol(value), result));
});

Deno.test("AnySymbol", () => {
  const anySymbol = new AnySymbol();
  assertExists(anySymbol["toString"]);
  assertExists(anySymbol[equality]);
  assertEquals(anySymbol.toString(), "any symbol");
  assertEquals(anySymbol[equality](Symbol("test")), true);
  assertEquals(anySymbol[equality](Symbol.for("hoge")), true);
  assertEquals(anySymbol[equality]({}), false);
});

Deno.test("anySymbol", () => {
  assertEquals(anySymbol(), new AnySymbol());
});
