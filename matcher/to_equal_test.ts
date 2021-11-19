// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toEqual } from "@matcher/to_equal.ts";
import { assertFail, assertSuccess } from "@/dev_deps.ts";
Deno.test({
  name: "toEqual",
  fn: () => {
    assertSuccess(toEqual({}, {}));
    assertFail(toEqual({}, { 0: 1 }));
  },
});
