// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeAfterOrEqualTo } from "./to_be_after_or_equal_to.ts";

Deno.test({
  name: "toBeAfterOrEqualTo",
  fn: () => {
    assertSuccess(
      toBeAfterOrEqualTo(new Date("2000/1/1"), new Date("1999/12/31")),
    );
    assertSuccess(
      toBeAfterOrEqualTo(new Date("2000/1/1"), new Date("2000/1/1")),
    );
    assertFail(
      toBeAfterOrEqualTo(
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:01"),
      ),
    );
  },
});
