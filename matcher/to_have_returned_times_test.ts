// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  predict,
  toHaveReturnedTimes,
} from "@matcher/to_have_returned_times.ts";
import { assertEquals, assertFail, assertSuccess } from "@/dev_deps.ts";
import type { MockResult } from "@mock/types.ts";
import { fn } from "@mock/fn.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockResult[], number, boolean][] = [[[], 0, true], [
      [{
        type: "return",
        value: undefined,
      }],
      1,
      true,
    ], [
      [{
        type: "return",
        value: undefined,
      }, {
        type: "return",
        value: undefined,
      }],
      2,
      true,
    ], [
      [{
        type: "return",
        value: undefined,
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
  name: "toHaveReturnedTimes",
  fn: () => {
    const mock = fn();

    assertSuccess(toHaveReturnedTimes(mock, 0));

    mock();
    assertSuccess(toHaveReturnedTimes(mock, 1));

    mock();
    assertFail(toHaveReturnedTimes(mock, 3));
  },
});
