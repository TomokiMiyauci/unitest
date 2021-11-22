// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AssertionError } from "../deps.ts";
import { it } from "./it.ts";
import { expect } from "../expect/mod.ts";
import { assertThrows } from "../dev_deps.ts";
Deno.test({
  name: "it",

  fn: () => {
    assertThrows(() =>
      it("test", () => {
        expect("").toBe(" ");
      }), AssertionError);
  },
});
