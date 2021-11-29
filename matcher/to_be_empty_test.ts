// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeEmpty } from "./to_be_empty.ts";

Deno.test({
  name: "toBeEmpty",
  fn: () => {
    assertSuccess(toBeEmpty(""));
    assertSuccess(toBeEmpty([]));
    assertSuccess(toBeEmpty(new Map()));
    assertSuccess(toBeEmpty({}));
    assertFail(toBeEmpty([1]));

    assertEquals(toBeEmpty({}), {
      pass: true,
      expected: "empty",
    });
  },
});
