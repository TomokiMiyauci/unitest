// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeFalsy } from "./to_be_falsy.ts";

Deno.test({
  name: "toBeFalsy",
  fn: () => {
    assertSuccess(toBeFalsy(""));
    assertSuccess(toBeFalsy(0));
    assertFail(toBeFalsy(1));
    assertFail(toBeFalsy({}));
    assertEquals(toBeFalsy(true), {
      pass: false,
      expectedHint: "Expected to any of:",
      expected: `false, 0, -0, 0n, "", null, undefined, NaN`,
    });
  },
});
