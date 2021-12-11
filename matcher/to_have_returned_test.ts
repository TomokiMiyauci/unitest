// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toHaveReturned } from "./to_have_returned.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import type { MockResult } from "../mock/mock.ts";
import { fn } from "../mock/fn.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockResult[], boolean][] = [[[], false], [[{
      type: "return",
      value: undefined,
    }], true], [[{
      type: "return",
      value: undefined,
    }, {
      type: "return",
      value: undefined,
    }], true]];

    table.forEach(([mockResult, result]) =>
      assertEquals(predict(mockResult), result)
    );
  },
});

Deno.test({
  name: "toHaveReturned",
  fn: () => {
    const mock = fn();

    assertFail(toHaveReturned(mock));

    mock();
    assertSuccess(toHaveReturned(mock));

    mock();
    assertSuccess(toHaveReturned(mock));

    const mock2 = fn((a: string) => a);
    assertFail(toHaveReturned(mock2));

    mock2("");

    assertSuccess(toHaveReturned(mock2));
    assertEquals(toHaveReturned(fn()), {
      pass: false,
      actualHint: "Actual returned:",
      actual: [],
      expectedHint: "Expected returned:",
      expected: "0 < Actual.length",
    });
  },
});
