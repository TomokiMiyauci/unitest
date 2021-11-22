// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeNull } from "./to_be_null.ts";

Deno.test({
  name: "toBeNull",
  fn: () => {
    assertSuccess(toBeNull(null));
    assertFail(toBeNull(undefined));
  },
});
