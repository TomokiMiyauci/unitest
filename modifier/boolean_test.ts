// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { boolean } from "./boolean.ts";
import { assertEquals } from "../dev_deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("number", () => {
  const context = {} as PreModifierContext;
  assertEquals(boolean.type, "pre");
  assertEquals(boolean.fn("", context), { actual: false });
  assertEquals(boolean.fn("test", context), { actual: true });
});
