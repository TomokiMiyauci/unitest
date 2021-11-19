// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "@/dev_deps.ts";
import { predict, toBeCloseTo } from "@matcher/to_be_close_to.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [number, number, number, boolean][] = [[
      0.1 + 0.2,
      0.3,
      2,
      true,
    ], [
      Infinity,
      Infinity,
      0,
      true,
    ], [
      Infinity,
      -Infinity,
      0,
      true,
    ], [
      0.1,
      0.101,
      3,
      false,
    ]];

    table.forEach(([actual, expected, precision, result]) =>
      assertEquals(predict(actual, expected, precision), result)
    );
  },
});

Deno.test({
  name: "toBeCloseTo",
  fn: () => {
    assertSuccess(toBeCloseTo(0.1 + 0.2, 0.3));
    assertSuccess(toBeCloseTo(0.1, 0.101, 0));
    assertFail(toBeCloseTo(0.1, 0.101, 3));
  },
});
