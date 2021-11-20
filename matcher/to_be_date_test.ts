// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeDate } from "@matcher/to_be_date.ts";

Deno.test({
  name: "toBeDate",
  fn: () => {
    assertSuccess(toBeDate(new Date("2000/1/1")));
    assertFail(toBeDate(Date));
  },
});
