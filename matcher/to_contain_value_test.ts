// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toContainValue } from "./to_contain_value.ts";

Deno.test({
  name: "toContainValue",
  fn: () => {
    assertSuccess(toContainValue({ a: 1, b: 2, c: 3 }, 3));
    assertSuccess(toContainValue({ a: {}, b: [] }, []));
    assertFail(toContainValue({}, []));

    assertEquals(toContainValue({ a: 1, b: 2 }, undefined), {
      pass: false,
      actual: [1, 2],
      actualHint: "Actual values:",
      expected: undefined,
      expectedHint: "Expected to contain:",
    });
  },
});
