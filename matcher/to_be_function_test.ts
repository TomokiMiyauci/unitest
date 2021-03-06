// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeFunction } from "./to_be_function.ts";

Deno.test({
  name: "toBeFunction",
  fn: () => {
    assertSuccess(toBeFunction(() => {}));
    assertSuccess(toBeFunction(new Function()));
    assertFail(toBeFunction({}));
    assertEquals(toBeFunction(false), {
      pass: false,
      expected: "function",
    });
  },
});
