// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeFalse } from "./to_be_false.ts";

Deno.test({
  name: "toBeFalse",
  fn: () => {
    assertSuccess(toBeFalse(false));
    assertFail(toBeFalse(true));
  },
});
