// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { number } from "./number.ts";
import { assertEquals } from "../dev_deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("number", () => {
  const context = {} as PreModifierContext;
  assertEquals(number.type, "pre");
  assertEquals(number.fn("", context), { actual: 0 });
  assertEquals(number.fn("test", context), { actual: NaN });
  assertEquals(number.fn(1, context), { actual: 1 });
  assertEquals(number.fn(1n, context), { actual: 1 });
});
