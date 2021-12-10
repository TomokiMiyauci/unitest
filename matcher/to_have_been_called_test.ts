// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveBeenCalled } from "./to_have_been_called.ts";
import { fn } from "../mock/mod.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "toHaveBeenCalled",
  fn: () => {
    const mock = fn();
    mock();
    assertSuccess(toHaveBeenCalled(mock));

    const mock2 = fn();
    assertFail(toHaveBeenCalled(mock2));
    assertEquals(toHaveBeenCalled(mock2), {
      actualHint: "Actual calls:",
      pass: false,
      actual: 0,
      expected: "0 < Actual",
    });
  },
});
