// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toBeWithin } from "./to_be_within.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [number, number, number, boolean][] = [
      [0, 0, 1, true],
      [0, 1, 2, true],
      [0, 1, 1, false],
      [0, Infinity, 1, false],
    ];

    table.forEach(([start, actual, end, result]) =>
      assertEquals(predict(actual, start, end), result)
    );
  },
});

Deno.test({
  name: "toBeWithin",
  fn: () => {
    assertSuccess(toBeWithin(0, 0, 1));
    assertFail(toBeWithin(0, 0, 0));
    assertEquals(toBeWithin(3, 0, 3), {
      pass: false,
      expected: "0 <= Actual < 3",
    });
  },
});
