// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { trim } from "./trim.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { magenta } from "../deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test("trim", () => {
  assertEquals(trim.type, "pre");
  assertExists(trim.fn("", {} as PreModifierContext).reserveActualHint);
  assertEquals(
    trim.fn("", {} as PreModifierContext).reserveActualHint?.("Actual:"),
    `Actual: ${magenta("[trimmed]")}`,
  );
  const table: [
    string,
    ReturnType<typeof trim["fn"]>,
  ][] = [
    ["", { actual: "" }],
    [" test ", { actual: "test" }],
    ["  test  ", { actual: "test" }],
    ["test ", { actual: "test" }],
    [" test", { actual: "test" }],
  ];

  table.forEach(([actual, result]) =>
    assertEquals(
      trim.fn(actual, {} as PreModifierContext).actual,
      result.actual,
    )
  );
});
