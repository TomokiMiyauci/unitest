// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toBe } from "./to_be.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table = [
      ["", "", true],
      ["test", "test", true],
      [1, 1, true],
      [0, 0, true],
      [-0, -0, true],
      [true, true, true],
      [false, false, true],
      [undefined, undefined, true],
      [null, null, true],
      [1n, 1n, true],
      [0n, 0n, true],
      ["", " ", false],
      [{}, {}, false],
    ];
    table.forEach(([actual, expected, exp]) =>
      assertEquals(predict(actual, expected), exp)
    );
  },
});

Deno.test({
  name: "toBe",
  fn: () => {
    assertSuccess(toBe("", ""));
    assertFail(toBe("", " "));
    assertEquals(toBe(0, 1), {
      pass: false,
      expected: 1,
    });
  },
});
