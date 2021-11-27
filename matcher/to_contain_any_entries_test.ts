// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toContainAnyEntries } from "./to_contain_any_entries.ts";

Deno.test({
  name: "toContainAnyEntries",
  fn: () => {
    assertSuccess(toContainAnyEntries({ a: 1 }, [["a", 1]]));
    assertSuccess(
      toContainAnyEntries({ a: 2 }, [["a", 0], ["a", 1], ["a", 2]]),
    );
    assertSuccess(
      toContainAnyEntries({ a: 1, b: 2, c: {} }, [
        ["a", 0],
        ["b", 1],
        ["c", 2],
        ["d", {}],
        ["c", {}],
      ]),
    );
    assertFail(toContainAnyEntries({}, []));
    assertFail(
      toContainAnyEntries({ a: {}, b: [], c: undefined }, [["c", null], [
        "d",
        1,
      ]]),
    );

    assertEquals(
      toContainAnyEntries({ a: 1, b: "", c: null }, [["d", undefined], [
        "e",
        {},
      ]]),
      {
        pass: false,
        actual: [
          ["a", 1],
          ["b", ""],
          ["c", null],
        ],
        actualHint: "Actual entries:",
        expected: [["d", undefined], [
          "e",
          {},
        ]],
        expectedHint: "Expected to contain any of:",
      },
    );
  },
});
