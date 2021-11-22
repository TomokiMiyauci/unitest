// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeAnything } from "./to_be_anything.ts";

Deno.test({
  name: "toBeAnything",
  fn: () => {
    assertSuccess(toBeAnything(""));
    assertSuccess(toBeAnything({}));
    assertSuccess(toBeAnything(0));
    assertSuccess(toBeAnything(1));
    assertFail(toBeAnything(undefined));
    assertFail(toBeAnything(null));
  },
});
