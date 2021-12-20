// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveReturnedWith } from "./to_have_returned_with.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { fn } from "../mock/fn.ts";

Deno.test({
  name: "toHaveReturnedWith",
  fn: () => {
    const mock = fn();

    assertFail(toHaveReturnedWith(mock, undefined));

    mock();
    assertSuccess(toHaveReturnedWith(mock, undefined));

    const mock2 = fn(() => 1);
    assertFail(toHaveReturnedWith(mock2, 1));

    mock2();
    assertSuccess(toHaveReturnedWith(mock2, 1));

    assertEquals(toHaveReturnedWith(mock2, 2), {
      pass: false,
      resultActual: [1],
      actualHint: "Actual all returned:",
      expected: 2,
    });
  },
});
