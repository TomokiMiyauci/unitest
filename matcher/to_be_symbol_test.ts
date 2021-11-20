// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeSymbol } from "@matcher/to_be_symbol.ts";

Deno.test({
  name: "toBeSymbol",
  fn: () => {
    assertSuccess(toBeSymbol(Symbol("test")));
    assertFail(toBeSymbol(false));
  },
});
