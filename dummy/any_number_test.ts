// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyNumber, anyNumber, isAnyNumber } from "./any_number.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";
import { isEven } from "../deps.ts";
import { expect } from "../expect/expect.ts";
import { fn } from "../mock/fn.ts";

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
  name: "AnyNumber with condition",
  fn: () => {
    const anyNumber = new AnyNumber(isEven);

    assertEquals(anyNumber[equality]("test"), false);
    assertEquals(anyNumber[equality](1), false);
    assertEquals(anyNumber[equality](2), true);

    const mockFn = fn(() => true);

    const anyStr = new AnyNumber(mockFn);
    anyStr[equality](1);
    expect(mockFn).toHaveBeenCalledWith(1);
    expect(mockFn).toHaveReturnedWith(true);
  },
});

Deno.test({
  name: "anyNumber",
  fn: () => {
    assertEquals(anyNumber(), new AnyNumber());
  },
});
