// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeTruthy } from "@matcher/to_be_truthy.ts";

Deno.test({
  name: "toBeTruthy",
  fn: () => {
    assertFail(toBeTruthy(""));
    assertFail(toBeTruthy(0));
    assertSuccess(toBeTruthy(1));
    assertSuccess(toBeTruthy({}));
  },
});