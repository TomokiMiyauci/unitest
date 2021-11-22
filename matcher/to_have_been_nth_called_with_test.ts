// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  predict,
  toHaveBeenNthCalledWith,
} from "./to_have_been_nth_called_with.ts";
import { MockCall } from "../mock/types.ts";
import { fn } from "../mock/mod.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockCall["calls"], number, unknown[], boolean][] = [
      [
        [],
        0,
        [],
        false,
      ],
      [[[1], [2], [3]], 1, [1], true],
      [[[1], [2], [3], [4], [5]], 4, [4], true],
      [[[1], [2], [3], [4], [5]], 5, [4], false],
    ];

    table.forEach(([actual, nthCall, expected, result]) =>
      assertEquals(predict(actual, nthCall, ...expected), result)
    );
  },
});

Deno.test({
  name: "toHaveBeenNthCalledWith",
  fn: () => {
    const mock = fn();
    mock(1);
    assertSuccess(toHaveBeenNthCalledWith(mock, 1, 1));

    mock({});
    assertSuccess(toHaveBeenNthCalledWith(mock, 2, {}));

    mock(3, 4);
    assertSuccess(toHaveBeenNthCalledWith(mock, 3, 3, 4));
    mock(5);
    assertFail(toHaveBeenNthCalledWith(mock, 0, 5));
  },
});
