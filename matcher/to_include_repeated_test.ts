// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toIncludeRepeated } from "./to_include_repeated.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [string, string, number, boolean][] = [
      ["abc abc abc", "abc", 3, true],
      ["    ", " ", 4, true],
      ["abc", "b", 1, true],
      ["    ", " ", 5, false],
      ["", "", 1, true],
      ["abc", "d", 0, true],
    ];

    table.forEach(([actual, substring, times, result]) =>
      assertEquals(predict(actual, substring, times), result)
    );
  },
});

Deno.test({
  name: "toIncludeRepeated",
  fn: () => {
    assertSuccess(toIncludeRepeated("abc abc abc", "abc", 3));
    assertFail(toIncludeRepeated("abcdabcd", "abcd", 1));

    assertEquals(toIncludeRepeated("", "", 0), {
      pass: false,
      expected: "",
      expectedHint: "Expected to include repeated 0 times",
    });
  },
});
