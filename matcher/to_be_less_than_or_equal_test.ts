// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeLessThanOrEqual } from "@matcher/to_be_less_than_or_equal.ts";

Deno.test({
  name: "toBeLessThanOrEqualOrEqual",
  fn: () => {
    assertSuccess(toBeLessThanOrEqual(1, 2));
    assertSuccess(toBeLessThanOrEqual(1n, 2));
    assertSuccess(toBeLessThanOrEqual(0, 0));
    assertSuccess(toBeLessThanOrEqual("", 0));
    assertFail(toBeLessThanOrEqual(NaN, NaN));
    assertFail(toBeLessThanOrEqual(NaN, 0));
    assertFail(toBeLessThanOrEqual(1, 0));
    assertFail(toBeLessThanOrEqual(1n, 0));
  },
});
