// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toStartWith } from "./to_start_with.ts";

Deno.test({
  name: "toStartWith",
  fn: () => {
    assertSuccess(toStartWith("", ""));
    assertSuccess(toStartWith("test", "t"));
    assertFail(toStartWith("test", "tst"));

    assertEquals(toStartWith("", " "), {
      pass: false,
      expectedHint: "Expected to start with:",
      expected: " ",
    });
  },
});
