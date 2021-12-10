// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveBeenCalledTimes } from "./to_have_been_called_times.ts";
import { fn } from "../mock/mod.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "toHaveBeenCalledTimes",
  fn: () => {
    const mock = fn();
    mock();
    assertSuccess(toHaveBeenCalledTimes(mock, 1));

    const mock2 = fn();
    assertSuccess(toHaveBeenCalledTimes(mock2, 0));

    const mock3 = fn();
    mock3();
    mock3();
    mock3();
    mock3();

    assertSuccess(toHaveBeenCalledTimes(mock3, 4));

    assertFail(toHaveBeenCalledTimes(fn(), 1));

    assertEquals(toHaveBeenCalledTimes(fn(), 1), {
      pass: false,
      actual: 0,
      actualHint: "Actual called times:",
      expected: 1,
      expectedHint: "Expected called times:",
    });
  },
});
