// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeBoolean } from "./to_be_boolean.ts";

Deno.test({
  name: "toBeBoolean",
  fn: () => {
    assertSuccess(toBeBoolean(true));
    assertSuccess(toBeBoolean(false));
    assertFail(toBeBoolean(new Boolean()));
    assertFail(toBeBoolean({}));

    assertEquals(toBeBoolean(1), {
      pass: false,
      expected: "boolean",
    });
  },
});
