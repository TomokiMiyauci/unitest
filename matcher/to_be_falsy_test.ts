// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";

Deno.test({
  name: "toBeFalsy",
  fn: () => {
    assertSuccess(toBeFalsy(""));
    assertSuccess(toBeFalsy(0));
    assertFail(toBeFalsy(1));
    assertFail(toBeFalsy({}));
  },
});
