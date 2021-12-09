// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeString } from "./to_be_string.ts";

Deno.test({
  name: "toBeString",
  fn: () => {
    assertSuccess(toBeString(""));
    assertSuccess(toBeString("test"));
    assertSuccess(toBeString(String()));
    assertFail(toBeString(new String("")));
    assertFail(toBeString({}));
    assertEquals(toBeString(new String("")), {
      pass: false,
      expected: "string",
    });
  },
});
