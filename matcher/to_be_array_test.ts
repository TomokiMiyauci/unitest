// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeArray } from "./to_be_array.ts";

Deno.test({
  name: "toBeArray",
  fn: () => {
    assertSuccess(toBeArray([]));
    assertSuccess(toBeArray([[]]));
    assertFail(toBeArray({}));
    assertEquals(toBeArray({}), {
      pass: false,
      expected: "array",
    });
  },
});
