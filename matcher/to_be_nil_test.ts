// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeNil } from "./to_be_nil.ts";

Deno.test({
  name: "toBeNil",
  fn: () => {
    assertSuccess(toBeNil(undefined));
    assertSuccess(toBeNil(null));
    assertFail(toBeNil(""));
    assertFail(toBeNil({}));
    assertFail(toBeNil(0));
    assertEquals(toBeNil(false), {
      pass: false,
      expected: "null or undefined",
    });
  },
});
