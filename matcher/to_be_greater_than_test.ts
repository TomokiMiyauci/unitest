// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeGreaterThan } from "@matcher/to_be_greater_than.ts";

Deno.test({
  name: "toBeGreaterThan",
  fn: () => {
    assertSuccess(toBeGreaterThan(1, 0));
    assertSuccess(toBeGreaterThan(1000, 100));
    assertSuccess(toBeGreaterThan(1n, 0));
    assertFail(toBeGreaterThan("", 0));
    assertFail(toBeGreaterThan(NaN, 0));
    assertFail(toBeGreaterThan(NaN, NaN));
    assertFail(toBeGreaterThan(1n, 2));
    assertFail(toBeGreaterThan(0, 0));
  },
});
