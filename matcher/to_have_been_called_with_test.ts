// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  predict,
  toHaveBeenCalledWith,
} from "@matcher/to_have_been_called_with.ts";
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
      ["b"],
      false,
    ], [
      [["a", "b"]],
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
  name: "toHaveBeenCalledWith",
  fn: () => {
    const mock = fn();
    mock(1);
    assertSuccess(toHaveBeenCalledWith(mock, 1));

    mock(3, 4);

    assertSuccess(toHaveBeenCalledWith(mock, 3, 4));
    assertFail(toHaveBeenCalledWith(mock, 2));
  },
});
