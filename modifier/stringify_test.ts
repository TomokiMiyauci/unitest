// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { stringify } from "./stringify.ts";
import { assertEquals } from "../dev_deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("stringify", () => {
  assertEquals(stringify.type, "pre");
  assertEquals(stringify.fn(1, {} as PreModifierContext), { actual: "1" });
  assertEquals(stringify.fn("test", {} as PreModifierContext), {
    actual: "test",
  });
  assertEquals(stringify.fn(null, {} as PreModifierContext), {
    actual: "null",
  });
});
