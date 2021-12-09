// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeNaN } from "./to_be_nan.ts";

Deno.test({
  name: "toBeNaN",
  fn: () => {
    assertSuccess(toBeNaN(NaN));
    assertFail(toBeNaN(0));
    assertFail(toBeNaN(1));
    assertEquals(toBeNaN(1), {
      pass: false,
      expected: NaN,
    });
  },
});
