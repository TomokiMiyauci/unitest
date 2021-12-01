// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyNumber, anyNumber, isAnyNumber } from "./any_number.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyNumber", () => {
  const table: [
    ...Parameters<typeof isAnyNumber>,
    ReturnType<typeof isAnyNumber>,
  ][] = [
    [1, true],
    [0, true],
    [new Number(100), true],
    [Number, false],
    [1n, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyNumber(value), result));
});

Deno.test({
  name: "AnyNumber",
  fn: () => {
    const anyNumber = new AnyNumber();
    assertExists(anyNumber.toString);
    assertExists(anyNumber[equality]);

    assertEquals(anyNumber.toString(), "any number");
    assertEquals(anyNumber[equality](undefined), false);
    assertEquals(anyNumber[equality](null), false);
    assertEquals(anyNumber[equality](1), true);
  },
});

Deno.test({
  name: "anyNumber",
  fn: () => {
    assertEquals(anyNumber(), new AnyNumber());
  },
});
