// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toIncludeAllMembers } from "./to_include_all_members.ts";

Deno.test({
  name: "toIncludeAllMembers",
  fn: () => {
    assertSuccess(toIncludeAllMembers([], []));
    assertFail(toIncludeAllMembers([], [1]));

    assertEquals(toIncludeAllMembers([1, 2, 3], [2, 3, 4]), {
      pass: false,
      expected: [2, 3, 4],
      expectedHint: "Expected to have all of the members:",
    });
  },
});
