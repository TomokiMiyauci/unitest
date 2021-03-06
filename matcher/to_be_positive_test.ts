// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBePositive } from "./to_be_positive.ts";

Deno.test({
  name: "toBePositive",
  fn: () => {
    assertSuccess(toBePositive(1));
    assertSuccess(toBePositive(Number.MAX_VALUE));
    assertFail(toBePositive(0));
    assertFail(toBePositive(-0));
    assertFail(toBePositive(-1));
    assertFail(toBePositive(-Infinity));
    assertFail(toBePositive(Infinity));
    assertFail(toBePositive(NaN));
    assertEquals(toBePositive(-1), {
      pass: false,
      expected: "positive number",
    });
  },
});
