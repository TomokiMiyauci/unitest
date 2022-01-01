// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { upperCase } from "./upper_case.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { magenta } from "../deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("upperCase", () => {
  const context = {} as PreModifierContext;
  assertEquals(upperCase.type, "pre");
  assertExists(upperCase.fn("", context).reserveActualHint);
  assertEquals(
    upperCase.fn("", context).reserveActualHint?.("Actual:"),
    `Actual: ${magenta("[toUpperCase]")}`,
  );
  assertEquals(upperCase.fn("", context).actual, "");
  assertEquals(upperCase.fn("test", context).actual, "TEST");
  assertEquals(upperCase.fn("Test", context).actual, "TEST");
  assertEquals(upperCase.fn("Test", context).actual, "TEST");
  assertEquals(upperCase.fn("TEST", context).actual, "TEST");
});
