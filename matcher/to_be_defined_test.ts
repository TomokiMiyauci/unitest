// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeDefined } from "./to_be_defined.ts";

Deno.test({
  name: "toBeDefined",
  fn: () => {
    assertSuccess(toBeDefined({}));
    assertFail(toBeDefined(undefined));
    assertEquals(toBeDefined(undefined), {
      pass: false,
      expected: "All except undefined",
    });
  },
});
