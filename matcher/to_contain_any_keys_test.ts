// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toContainAnyKeys } from "./to_contain_any_keys.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const symbol = Symbol.for("test");
    const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] =
      [
        [{}, [], false],
        [{}, [""], false],
        [{ a: 1 }, ["b"], false],
        [{ a: 1 }, ["a"], true],
        [{ c: 1 }, ["a", "b", "c"], true],
        [{ [symbol]: 1 }, ["a", "b", "c", symbol], true],
        [{ a: 1, b: 1, c: 1 }, ["a", "b", "c", symbol], true],
        [{ 1: 1, 2: 2 }, [2, 3, 4], true],
        [new Map([[2, 2]]), [2, 3, 4], false],
      ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toContainAnyKeys",
  fn: () => {
    assertSuccess(toContainAnyKeys([], ["length", ""]));
    assertFail(toContainAnyKeys({}, []));

    assertEquals(toContainAnyKeys({ a: 1 }, ["b", "c", "d"]), {
      pass: false,
      expected: ["b", "c", "d"],
      expectedHint: "Expected to contain any of keys:",
      actualHint: "Actual keys:",
      resultActual: Object.keys({ a: 1 }),
    });

    assertEquals(
      toContainAnyKeys({ a: 1, [Symbol.for("test")]: 2 }, ["b", "c", "d"]),
      {
        pass: false,
        expected: ["b", "c", "d"],
        expectedHint: "Expected to contain any of keys:",
        actualHint: "Actual keys:",
        resultActual: ["a", Symbol.for("test")],
      },
    );
  },
});
