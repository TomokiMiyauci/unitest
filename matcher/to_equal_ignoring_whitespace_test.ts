// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import {
  noWhiteSpace,
  toEqualIgnoringWhitespace,
} from "./to_equal_ignoring_whitespace.ts";

Deno.test({
  name: "noWhiteSpace",
  fn: () => {
    const table: [string, string][] = [
      [" a ", "a"],
      ["     a", "a"],
      ["a      ", "a"],
      ["SELECT * FROM TABLE WHERE CONDITION", "SELECT*FROMTABLEWHERECONDITION"],
    ];

    table.forEach(([actual, expected]) =>
      assertEquals(noWhiteSpace(actual), expected)
    );
  },
});

Deno.test({
  name: "toEqualIgnoringWhitespace",
  fn: () => {
    assertSuccess(toEqualIgnoringWhitespace(" abc ", "  a b c  "));
    assertFail(toEqualIgnoringWhitespace(" a ", " b "));

    assertEquals(toEqualIgnoringWhitespace(" a b c ", " e f g "), {
      pass: false,
      resultActual: "abc",
      expected: "efg",
      expectedHint: "Expected except white-space:",
      actualHint: "Actual except white-space:",
    });
  },
});
