// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveLength } from "./to_have_length.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "toHaveLength",
  fn: () => {
    assertSuccess(toHaveLength([], 0));
    assertSuccess(toHaveLength("test", 4));
    assertFail(toHaveLength({}, 0));
    assertEquals(toHaveLength([], 2), {
      pass: false,
      resultActual: 0,
      actualHint: "Actual length:",
      expected: 2,
    });
  },
});
