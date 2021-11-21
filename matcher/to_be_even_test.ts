// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeEven } from "./to_be_even.ts";

Deno.test({
  name: "toBeEven",
  fn: () => {
    assertSuccess(toBeEven(0));
    assertFail(toBeEven(1));
    assertFail(toBeEven(-1));
  },
});
