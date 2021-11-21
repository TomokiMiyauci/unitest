// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeValidDate } from "./to_be_valid_date.ts";

Deno.test({
  name: "toBeValidDate",
  fn: () => {
    assertSuccess(toBeValidDate(new Date("2000/1/1")));
    assertFail(toBeValidDate(new Date("invalid")));
  },
});
