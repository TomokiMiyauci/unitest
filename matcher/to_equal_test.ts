// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toEqual } from "./to_equal.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
Deno.test({
  name: "toEqual",
  fn: () => {
    assertSuccess(toEqual({}, {}));
    assertFail(toEqual({}, { 0: 1 }));
    assertEquals(toEqual({ a: 1 }, {}), {
      pass: false,
      expected: {},
    });
  },
});
