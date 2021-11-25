// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import {
  assertEquals,
  assertExpected,
  assertFail,
  assertSuccess,
} from "../dev_deps.ts";
import { predict, toContainKeys } from "./to_contain_keys.ts";
import type { PredictResult } from "./to_contain_keys.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [object, PropertyKey[], PredictResult][] = [
      [{}, [], { result: true, noKeys: [] }],
      [{ a: undefined }, ["a"], { result: true, noKeys: [] }],
      [{ a: 1, b: 2, c: 3 }, ["a", "c"], { result: true, noKeys: [] }],
      [{ a: { b: 1 } }, ["a", "b"], { result: false, noKeys: ["b"] }],
    ];
    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toContainKeys",
  fn: () => {
    assertSuccess(toContainKeys({}, []));
    assertSuccess(toContainKeys({ a: undefined, b: undefined }, ["a", "b"]));
    assertFail(toContainKeys({ a: undefined, b: 1, d: 2 }, ["b", "c"]));

    assertExpected({
      matcher: toContainKeys,
      expected: "missing keys: d",
    }, {
      actual: { a: 1, b: 2, c: 3 },
      expectedArgs: [["a", "c", "d"]],
    });
  },
});
