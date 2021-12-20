// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { string } from "./string.ts";
import { assertEquals } from "../dev_deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("string", () => {
  assertEquals(string.type, "pre");
  assertEquals(string.fn(1, {} as PreModifierContext), { actual: "1" });
  assertEquals(string.fn("test", {} as PreModifierContext), {
    actual: "test",
  });
  assertEquals(string.fn(null, {} as PreModifierContext), {
    actual: "null",
  });
});
