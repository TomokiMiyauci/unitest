// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toIncludeAnyMembers } from "./to_include_any_members.ts";

Deno.test({
  name: "toIncludeAnyMembers",
  fn: () => {
    assertSuccess(toIncludeAnyMembers([1], [1]));
    assertSuccess(toIncludeAnyMembers([1], [1, 2]));
    assertSuccess(toIncludeAnyMembers([{}], [1, {}]));
    assertSuccess(toIncludeAnyMembers([{}, null, undefined], [1, undefined]));
    assertFail(toIncludeAnyMembers([], []));
    assertFail(toIncludeAnyMembers([3, 4, 5], [1, 2]));

    assertEquals(toIncludeAnyMembers([1, 2, {}], [4, 5]), {
      pass: false,
      expected: [4, 5],
      expectedHint: "Expected to include any of:",
    });
  },
});
