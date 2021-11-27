// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toContainEntry } from "./to_contain_entry.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] =
      [
        [{}, ["", {}], false],
        [{ a: 1 }, ["a", 1], true],
        [{ a: 1, b: 2 }, ["a", 2], false],
        [{ a: 1, b: 2 }, [1, 2], false],
        [{ a: 1, [Symbol.for("test")]: 2 }, [Symbol.for("test"), 2], true],
        [{ a: {}, b: [] }, ["b", []], true],
      ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toContainEntry",
  fn: () => {
    assertSuccess(toContainEntry({ "": {} }, ["", {}]));
    assertFail(toContainEntry({}, ["", ""]));

    assertEquals(toContainEntry({ a: 1, b: 2, c: 3 }, ["abc", "def"]), {
      pass: false,
      expected: ["abc", "def"],
      expectedHint: "Expected to contain:",
      actual: [["a", 1], ["b", 2], ["c", 3]],
      actualHint: "Actual entry:",
    });
  },
});
