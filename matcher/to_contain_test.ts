// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toContain } from "./to_contain.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] =
      [[
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
      ], [
        "abcde",
        "cd",
        true,
      ], [
        [-0],
        0,
        true,
      ], [
        new Set([1, 2, 3]),
        2,
        true,
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

    assertEquals(toContain("hello world", "war"), {
      pass: false,
      expected: "war",
      expectedHint: "Expected to contain:",
    });

    assertEquals(toContain(new Set([1, 2, 3, 4]), 5), {
      pass: false,
      expected: 5,
      expectedHint: "Expected to contain:",
    });
  },
});
