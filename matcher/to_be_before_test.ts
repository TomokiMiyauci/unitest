// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeBefore } from "./to_be_before.ts";

Deno.test({
  name: "toBeBefore",
  fn: () => {
    assertSuccess(toBeBefore(new Date("1999/12/31"), new Date("2000/1/1")));
    assertFail(toBeBefore(new Date("2000/1/1"), new Date("2000/1/1")));

    assertEquals(toBeBefore(new Date("2000/1/1"), new Date("2000/1/1")), {
      pass: false,
      expected: new Date("2000/1/1"),
      expectedHint: "Expected to be before:",
    });
  },
});
