// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toIncludeSameMembers } from "./to_include_same_members.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [readonly unknown[], readonly unknown[], boolean][] = [
      [[], [], true],
      [[1], [1], true],
      [[1], [1, 2], false],
      [[2, 1], [1, 2], true],
      [[{}, {}, null], [{}, null, {}], true],
      [[1, 1, {}, {}], [{}, {}, {}, 1], false],
      [
        [1, [], 0, null, { a: { b: { c: {} } } }, {}],
        [1, null, { a: { b: { c: {} } } }, [], {}, 0],
        true,
      ],
      [
        [{}, {}, [], []],
        [[], {}, [], {}],
        true,
      ],
      [
        [[], {}, [], []],
        [[], {}, [], {}],
        false,
      ],
    ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toIncludeSameMembers",
  fn: () => {
    assertSuccess(toIncludeSameMembers([], []));
    assertSuccess(toIncludeSameMembers([1, 2, 3, {}, []], [[], {}, 3, 2, 1]));
    assertFail(toIncludeSameMembers([[], {}], [[], []]));

    const actual = [1, 2, 3, {}, []];
    const expected = [2, 3, {}, [], 1];

    assertEquals(toIncludeSameMembers(actual, expected), {
      pass: true,
      expected,
      expectedHint: "Expected to include all and of the same size",
    });
  },
});
