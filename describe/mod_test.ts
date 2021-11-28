// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { describe } from "./mod.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "describe",
  fn: () => {
    const mock = fn();

    describe("call callback", mock);

    assertEquals(mock.mock.calls.length, 1);
  },
});
