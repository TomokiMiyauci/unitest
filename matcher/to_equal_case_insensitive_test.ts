// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toEqualCaseInsensitive } from "./to_equal_case_insensitive.ts";

Deno.test({
  name: "toEqualCaseInsensitive",
  fn: () => {
    assertSuccess(toEqualCaseInsensitive("Abc", "aBC"));
    assertSuccess(toEqualCaseInsensitive("ABC", "abc"));
    assertFail(toEqualCaseInsensitive("abc ", "abc"));

    assertEquals(toEqualCaseInsensitive("abc", "ABC"), {
      pass: true,
      expected: "ABC",
      expectedHint: "Expected to be equal while ignoring case:",
    });
  },
});
