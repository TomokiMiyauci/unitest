// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeLessThan } from "@matcher/to_be_less_than.ts";

Deno.test({
  name: "toBeLessThan",
  fn: () => {
    assertSuccess(toBeLessThan(1, 2));
    assertSuccess(toBeLessThan(1n, 2));
    assertFail(toBeLessThan(0, 0));
    assertFail(toBeLessThan(NaN, NaN));
    assertFail(toBeLessThan(NaN, 0));
    assertFail(toBeLessThan("", 0));
    assertFail(toBeLessThan(1, 0));
    assertFail(toBeLessThan(1n, 0));
  },
});
