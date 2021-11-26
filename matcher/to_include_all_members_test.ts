// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toIncludeAllMembers } from "./to_include_all_members.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [unknown[], unknown[], boolean][] = [
      [[], [], true],
      [[null, undefined, 1], [1], true],
      [
        [null, { a: { b: {} } }, undefined, [], {}],
        [{}, [], { a: { b: {} } }],
        true,
      ],
      [[], [1], false],
    ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toIncludeAllMembers",
  fn: () => {
    assertSuccess(toIncludeAllMembers([], []));
    assertFail(toIncludeAllMembers([], [1]));

    assertEquals(toIncludeAllMembers([1, 2, 3], [2, 3, 4]), {
      pass: false,
      expected: [2, 3, 4],
      expectedHint: "Expected to have all of the members",
    });
  },
});
