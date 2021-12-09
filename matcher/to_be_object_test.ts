// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeObject } from "./to_be_object.ts";

Deno.test({
  name: "toBeObject",
  fn: () => {
    assertSuccess(toBeObject({}));
    assertSuccess(toBeObject([]));
    assertSuccess(toBeObject(new Object()));
    assertFail(toBeObject(undefined));
    assertFail(toBeObject(null));
    assertEquals(toBeObject(""), {
      pass: false,
      expected: "object",
    });
  },
});
