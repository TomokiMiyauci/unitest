// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeString } from "@matcher/to_be_string.ts";

Deno.test({
  name: "toBeString",
  fn: () => {
    assertSuccess(toBeString(""));
    assertSuccess(toBeString("test"));
    assertSuccess(toBeString(String()));
    assertFail(toBeString(new String("")));
    assertFail(toBeString({}));
  },
});
