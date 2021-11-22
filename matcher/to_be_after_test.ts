// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeAfter } from "./to_be_after.ts";

Deno.test({
  name: "toBeAfter",
  fn: () => {
    assertSuccess(toBeAfter(new Date("2000/1/1"), new Date("1999/12/31")));
    assertFail(toBeAfter(new Date("2000/1/1"), new Date("2000/1/1")));
  },
});
