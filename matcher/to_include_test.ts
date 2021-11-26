// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toInclude } from "./to_include.ts";

Deno.test({
  name: "toInclude",
  fn: () => {
    assertSuccess(toInclude("", ""));
    assertSuccess(toInclude("abc", "b"));
    assertSuccess(toInclude("Deno is wonderful", "is"));
    assertFail(toInclude("tet", " "));

    assertEquals(toInclude("", ""), {
      pass: true,
      expected: "",
      expectedHint: "Expected to include:",
    });
  },
});
