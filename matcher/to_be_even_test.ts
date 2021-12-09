// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeEven } from "./to_be_even.ts";

Deno.test({
  name: "toBeEven",
  fn: () => {
    assertSuccess(toBeEven(0));
    assertFail(toBeEven(1));
    assertFail(toBeEven(-1));
    assertEquals(toBeEven(1), {
      pass: false,
      expected: "even",
    });
  },
});
