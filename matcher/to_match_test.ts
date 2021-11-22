// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toMatch } from "./to_match.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [string, string | RegExp, boolean][] = [
      ["", "", true],
      [
        "",
        "test",
        false,
      ],
      ["abcd", "bc", true],
      ["abcd", "d", true],
      ["abcd", /^a/, true],
      ["abcd", /d$/, true],
      ["abcd", /^d/, false],
    ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toMatch",
  fn: () => {
    assertSuccess(toMatch("test", "es"));
    assertFail(toMatch("abcd", "efg"));
    assertFail(toMatch("abcd", /efg/));
  },
});
