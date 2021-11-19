// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toHaveReturnedWith } from "@matcher/to_have_returned_with.ts";
import { assertEquals, assertFail, assertSuccess } from "@/dev_deps.ts";
import type { MockResult } from "@mock/types.ts";
import { fn } from "@mock/fn.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockResult[], unknown, boolean][] = [[[], undefined, false], [
      [{
        type: "return",
        value: undefined,
      }],
      undefined,
      true,
    ], [
      [{
        type: "return",
        value: 1,
      }, {
        type: "return",
        value: 2,
      }],
      2,
      true,
    ]];

    table.forEach(([mockResult, expected, result]) =>
      assertEquals(predict(mockResult, expected), result)
    );
  },
});

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
  },
});
