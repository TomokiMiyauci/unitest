// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect } from "./mod.ts";
import { assertThrows } from "../dev_deps.ts";
import { AssertionError } from "../deps.ts";

Deno.test({
  name: "expect",
  fn: () => {
    assertThrows(() => expect("").toBe("1"), AssertionError);
    assertThrows(() => expect(undefined).toBeAnything(), AssertionError);
  },
});
