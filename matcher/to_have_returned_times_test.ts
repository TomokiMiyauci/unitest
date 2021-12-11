// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveReturnedTimes } from "./to_have_returned_times.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { fn } from "../mock/fn.ts";

Deno.test({
  name: "toHaveReturnedTimes",
  fn: () => {
    const mock = fn();

    assertSuccess(toHaveReturnedTimes(mock, 0));

    mock();
    assertSuccess(toHaveReturnedTimes(mock, 1));

    mock();
    assertFail(toHaveReturnedTimes(mock, 3));

    assertEquals(toHaveReturnedTimes(mock, 3), {
      pass: false,
      actual: 2,
      actualHint: "Actual returned times:",
      expected: 3,
    });
  },
});
