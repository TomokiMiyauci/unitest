// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeOneOf } from "@matcher/to_be_one_of.ts";

Deno.test({
  name: "toBeOneOf",
  fn: () => {
    assertSuccess(toBeOneOf("", [true, ""]));
    assertSuccess(toBeOneOf([], [[]]));
    assertFail(toBeOneOf([], []));
  },
});
