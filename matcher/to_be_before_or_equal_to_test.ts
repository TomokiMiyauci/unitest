// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeBeforeOrEqualTo } from "@matcher/to_be_before_or_equal_to.ts";

Deno.test({
  name: "toBeBeforeOrEqualTo",
  fn: () => {
    assertSuccess(
      toBeBeforeOrEqualTo(new Date("1999/12/31"), new Date("2000/1/1")),
    );
    assertSuccess(
      toBeBeforeOrEqualTo(new Date("2000/1/1"), new Date("2000/1/1")),
    );
    assertFail(
      toBeBeforeOrEqualTo(
        new Date("2000/1/1 00:00:02"),
        new Date("2000/1/1 00:00:01"),
      ),
    );
  },
});
