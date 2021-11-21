// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeNegative } from "./to_be_negative.ts";

Deno.test({
  name: "toBeNegative",
  fn: () => {
    assertSuccess(toBeNegative(-1));
    assertFail(toBeNegative(-0));
    assertFail(toBeNegative(0));
    assertFail(toBeNegative(1));
    assertFail(toBeNegative(-Infinity));
    assertFail(toBeNegative(-NaN));
    assertFail(toBeNegative(Infinity));
  },
});
