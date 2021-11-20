// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeArray } from "@matcher/to_be_array.ts";

Deno.test({
  name: "toBeArray",
  fn: () => {
    assertSuccess(toBeArray([]));
    assertSuccess(toBeArray([[]]));
    assertFail(toBeArray({}));
  },
});
