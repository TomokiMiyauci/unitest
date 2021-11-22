// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeInteger } from "./to_be_integer.ts";

Deno.test({
  name: "toBeInteger",
  fn: () => {
    assertSuccess(toBeInteger(1));
    assertSuccess(toBeInteger(0));
    assertFail(toBeInteger(0.1));
    assertFail(toBeInteger(Infinity));
    assertFail(toBeInteger(NaN));
    assertFail(toBeInteger(""));
    assertFail(toBeInteger(undefined));
  },
});
