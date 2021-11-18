// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeGreaterThanOrEqual } from "@matcher/to_be_greater_than_or_equal.ts";

Deno.test({
  name: "toBeGreaterThanOrEqual",
  fn: () => {
    assertSuccess(toBeGreaterThanOrEqual(1, 0));
    assertSuccess(toBeGreaterThanOrEqual(1000, 100));
    assertSuccess(toBeGreaterThanOrEqual(1n, 0));
    assertSuccess(toBeGreaterThanOrEqual(0, 0));
    assertSuccess(toBeGreaterThanOrEqual("", 0));
    assertFail(toBeGreaterThanOrEqual(1n, 2));
    assertFail(toBeGreaterThanOrEqual(NaN, NaN));
  },
});
