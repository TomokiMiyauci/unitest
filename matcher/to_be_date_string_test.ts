// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeDateString } from "./to_be_date_string.ts";

Deno.test({
  name: "toBeDateString",
  fn: () => {
    assertSuccess(toBeDateString("2021/1/1"));
    assertFail(toBeDateString(""));

    assertEquals(toBeDateString("2001/1/1"), {
      pass: true,
      expected: "date string",
    });
  },
});
