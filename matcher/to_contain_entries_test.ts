// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toContainEntries } from "./to_contain_entries.ts";

Deno.test({
  name: "toContainEntries",
  fn: () => {
    assertSuccess(toContainEntries({}, []));
    assertSuccess(toContainEntries({ a: 1 }, [["a", 1]]));
    assertSuccess(
      toContainEntries({ a: 1, b: "", c: {} }, [["c", {}], ["a", 1]]),
    );
    assertFail(
      toContainEntries({ a: 1, b: "", c: {} }, [["c", {}], ["a", 1], [
        "d",
        null,
      ]]),
    );

    assertEquals(toContainEntries({ a: 1 }, [["a", 1], ["b", 2], ["c", "3"]]), {
      pass: false,
      actual: [["a", 1]],
      actualHint: "Actual entries:",
      expected: [["a", 1], ["b", 2], ["c", "3"]],
      expectedHint: "Expected to contain all:",
    });
  },
});
