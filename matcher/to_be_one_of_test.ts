// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeOneOf } from "./to_be_one_of.ts";

Deno.test({
  name: "toBeOneOf",
  fn: () => {
    assertSuccess(toBeOneOf("", [true, ""]));
    assertSuccess(toBeOneOf([], [[]]));
    assertFail(toBeOneOf([], []));
    assertEquals(toBeOneOf(1, [2, 3]), {
      pass: false,
      expected: [2, 3],
      expectedHint: "Expected to any of:",
    });
  },
});
