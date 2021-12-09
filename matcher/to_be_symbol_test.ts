// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeSymbol } from "./to_be_symbol.ts";

Deno.test({
  name: "toBeSymbol",
  fn: () => {
    assertSuccess(toBeSymbol(Symbol("test")));
    assertFail(toBeSymbol(false));
    assertEquals(toBeSymbol(false), {
      pass: false,
      expected: "symbol",
    });
  },
});
