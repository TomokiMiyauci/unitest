// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toIncludeMultiple } from "./to_include_multiple.ts";

Deno.test({
  name: "toIncludeMultiple",
  fn: () => {
    assertSuccess(toIncludeMultiple("", []));
    assertSuccess(toIncludeMultiple("ab", ["a", "b"]));
    assertSuccess(toIncludeMultiple("deno node ", ["deno"]));

    assertEquals(toIncludeMultiple("", ["a", "b", "c"]), {
      pass: false,
      expected: ["a", "b", "c"],
      expectedHint: "Expected to contain all substrings:",
    });
  },
});
