// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  predict,
  toHaveLastReturnedWith,
} from "./to_have_last_returned_with.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import type { MockResult } from "../mock/mock.ts";
import { fn } from "../mock/fn.ts";

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
    ], [
      [{
        type: "return",
        value: 1,
      }, {
        type: "return",
        value: 2,
      }, {
        type: "return",
        value: 3,
      }],
      2,
      false,
    ]];

    table.forEach(([mockResult, expected, result]) =>
      assertEquals(predict(mockResult, expected), result)
    );
  },
});

Deno.test({
  name: "toHaveLastReturnedWith",
  fn: () => {
    const mock = fn();

    assertFail(toHaveLastReturnedWith(mock, undefined));

    mock();
    assertSuccess(toHaveLastReturnedWith(mock, undefined));

    const mock2 = fn((a: number) => a);
    assertFail(toHaveLastReturnedWith(mock2, 0));

    mock2(4);
    assertSuccess(toHaveLastReturnedWith(mock2, 4));

    mock2(8);

    assertSuccess(toHaveLastReturnedWith(mock2, 8));
    assertEquals(toHaveLastReturnedWith(mock2, 10), {
      pass: false,
      actualHint: "Actual last returned with:",
      actual: 8,
      expected: 10,
    });
  },
});
