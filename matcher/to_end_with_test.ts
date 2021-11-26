// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toEndWith } from "./to_end_with.ts";

Deno.test({
  name: "toEndWith",
  fn: () => {
    assertSuccess(toEndWith("", ""));
    assertSuccess(toEndWith("ab", ""));
    assertSuccess(toEndWith("abcd", "cd"));
    assertFail(toEndWith("abcd", "ab"));

    assertEquals(
      toEndWith("abc", "ab"),
      {
        pass: false,
        expected: "ab",
        expectedHint: "Expected to end with:",
      },
    );
  },
});
