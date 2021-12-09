// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeOdd } from "./to_be_odd.ts";

Deno.test({
  name: "toBeOdd",
  fn: () => {
    assertSuccess(toBeOdd(1));
    assertSuccess(toBeOdd(-1));
    assertFail(toBeOdd(0));
    assertEquals(toBeOdd(2), {
      pass: false,
      expected: "odd",
    });
  },
});
