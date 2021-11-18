// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeUndefined } from "@matcher/to_be_undefined.ts";

Deno.test({
  name: "toBeUndefined",
  fn: () => {
    assertSuccess(toBeUndefined(undefined));
    assertFail(toBeUndefined({}));
  },
});
