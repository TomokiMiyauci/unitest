// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeTrue } from "./to_be_true.ts";

Deno.test({
  name: "toBeTrue",
  fn: () => {
    assertSuccess(toBeTrue(true));
    assertFail(toBeTrue(false));
    assertEquals(toBeTrue(false), {
      pass: false,
      expected: true,
    });
  },
});
