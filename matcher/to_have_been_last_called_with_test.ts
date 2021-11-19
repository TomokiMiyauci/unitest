// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  predict,
  toHaveBeenLastCalledWith,
} from "@matcher/to_have_been_last_called_with.ts";
import { MockCall } from "@mock/types.ts";
import { fn } from "@mock/mod.ts";
import { assertEquals, assertFail, assertSuccess } from "@/dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [MockCall["calls"], unknown[], boolean][] = [[[], [], false], [
      [[""]],
      [""],
      true,
    ], [
      [["a", "b"]],
      ["a", "b"],
      true,
    ], [
      [["a", "b"], ["a", "b"]],
      ["a", "b"],
      true,
    ], [
      [[1], [], [3, 4]],
      [3, 4],
      true,
    ]];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, ...expected), result)
    );
  },
});

Deno.test({
  name: "toHaveBeenLastCalledWith",
  fn: () => {
    const mock = fn();
    mock(1);
    assertSuccess(toHaveBeenLastCalledWith(mock, 1));

    mock(3, 4);

    assertSuccess(toHaveBeenLastCalledWith(mock, 3, 4));

    assertFail(toHaveBeenLastCalledWith(mock, 2));

    const mock2 = fn();
    mock2();
    mock2();
    mock2();
    mock2(1);
    assertSuccess(toHaveBeenLastCalledWith(mock2, 1));
  },
});
