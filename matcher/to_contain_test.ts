// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toContain } from "./to_contain.ts";
import type { ContainIterable } from "./to_contain.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [ContainIterable, unknown, boolean][] = [[
      [""],
      "test",
      false,
    ], [
      ["a", "b", "c"],
      "b",
      true,
    ], [
      "abcde",
      "b",
      true,
    ], [
      "abcde",
      1,
      false,
    ], [
      "abcde",
      1,
      false,
    ]];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toContain",
  fn: () => {
    assertSuccess(toContain(["hello", "world"], "world"));
    assertFail(toContain("", "test"));
  },
});
