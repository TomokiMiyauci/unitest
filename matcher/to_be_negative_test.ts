// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeNegative } from "@matcher/to_be_negative.ts";

Deno.test({
  name: "toBeNegative",
  fn: () => {
    assertSuccess(toBeNegative(-1));
    assertSuccess(toBeNegative(-1n));
    assertFail(toBeNegative(-0));
    assertFail(toBeNegative(0n));
    assertFail(toBeNegative(-0n));
    assertFail(toBeNegative(0));
    assertFail(toBeNegative(1));
    assertFail(toBeNegative(1n));
  },
});
