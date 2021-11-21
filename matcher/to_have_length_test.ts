// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toHaveLength } from "./to_have_length.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [unknown, number, boolean][] = [
      ["", 0, true],
      [undefined, 0, false],
      [null, 0, false],
      [
        "test",
        4,
        true,
      ],
      [[], 0, true],
      [[1], 1, true],
      [{ length: 1 }, 1, true],
      [[], 1, false],
    ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});
Deno.test({
  name: "toHaveLength",
  fn: () => {
    assertSuccess(toHaveLength([], 0));
    assertSuccess(toHaveLength("test", 4));
    assertFail(toHaveLength({}, 0));
  },
});
