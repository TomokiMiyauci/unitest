// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeDefined } from "@matcher/to_be_defined.ts";

Deno.test({
  name: "toBeDefined",
  fn: () => {
    assertSuccess(toBeDefined({}));
    assertFail(toBeDefined(undefined));
  },
});
