// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toContainAnyValues } from "./to_contain_any_values.ts";

Deno.test({
  name: "toContainAnyValues",
  fn: () => {
    assertSuccess(toContainAnyValues({ a: 1, b: 2 }, [0, 2]));
    assertFail(toContainAnyValues({}, []));

    assertEquals(toContainAnyValues({ a: 1, b: 2, c: 3 }, [4, 5, 6]), {
      pass: false,
      actual: [1, 2, 3],
      actualHint: "Actual values:",
      expected: [4, 5, 6],
      expectedHint: "Expected to contain any of values:",
    });
  },
});
