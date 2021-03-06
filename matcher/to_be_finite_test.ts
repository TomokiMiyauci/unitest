// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeFinite } from "./to_be_finite.ts";

Deno.test({
  name: "toBeFinite",
  fn: () => {
    assertSuccess(toBeFinite(0));
    assertSuccess(toBeFinite(1));
    assertFail(toBeFinite(Infinity));
    assertFail(toBeFinite(-Infinity));
    assertFail(toBeFinite(NaN));
    assertFail(toBeFinite(0n));
    assertFail(toBeFinite(1n));
    assertEquals(toBeFinite(-NaN), {
      pass: false,
      expected: "finite number",
    });
  },
});
