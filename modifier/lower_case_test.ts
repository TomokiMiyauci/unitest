// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { lowerCase } from "./lower_case.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { magenta } from "../deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("lowerCase", () => {
  const context = {} as PreModifierContext;
  assertEquals(lowerCase.type, "pre");
  assertExists(lowerCase.fn("", context).reserveActualHint);
  assertEquals(
    lowerCase.fn("", context).reserveActualHint?.("Actual:"),
    `Actual: ${magenta("[toLowerCase]")}`,
  );
  assertEquals(lowerCase.fn("", context).actual, "");
  assertEquals(lowerCase.fn("test", context).actual, "test");
  assertEquals(lowerCase.fn("Test", context).actual, "test");
  assertEquals(lowerCase.fn("Test", context).actual, "test");
  assertEquals(lowerCase.fn("TEST", context).actual, "test");
});
