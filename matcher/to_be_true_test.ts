// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeTrue } from "@matcher/to_be_true.ts";

Deno.test({
  name: "toBeTrue",
  fn: () => {
    assertSuccess(toBeTrue(true));
    assertFail(toBeTrue(false));
  },
});
