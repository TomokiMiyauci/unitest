// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toHaveNthReturnedWith } from "./to_have_nth_returned_with.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import type { MockResult } from "../mock/mock.ts";
import { fn } from "../mock/fn.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockResult[], number, unknown, boolean][] = [[
      [],
      0,
      undefined,
      false,
    ], [
      [{ type: "return", value: 1 }],
      1,
      1,
      true,
    ], [
      [{ type: "return", value: 1 }, { type: "return", value: 2 }, {
        type: "return",
        value: {},
      }, { type: "return", value: 4 }],
      3,
      {},
      true,
    ]];

    table.forEach(([mockResult, nthCall, expected, result]) =>
      assertEquals(predict(mockResult, nthCall, expected), result)
    );
  },
});

Deno.test({
  name: "toHaveNthReturnedWith",
  fn: () => {
    const mock = fn();

    assertFail(toHaveNthReturnedWith(mock, 0, 0));

    mock();
    assertSuccess(toHaveNthReturnedWith(mock, 1, undefined));

    const mock2 = fn((a: number) => a);

    assertFail(toHaveNthReturnedWith(mock2, 0, undefined));
    mock2(5);

    assertSuccess(toHaveNthReturnedWith(mock2, 1, 5));
    assertFail(toHaveNthReturnedWith(mock2, 2, 5));

    mock2(10);
    assertSuccess(toHaveNthReturnedWith(mock2, 2, 10));

    assertEquals(toHaveNthReturnedWith(mock2, 2, 2), {
      actual: 10,
      actualHint: `Actual 2th returned with:`,
      pass: false,
      expected: 2,
    });
  },
});
