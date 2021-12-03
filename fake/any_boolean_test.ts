// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertExists } from "../dev_deps.ts";
import { AnyBoolean, anyBoolean, isAnyBoolean } from "./any_boolean.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyBoolean", () => {
  const table: [
    ...Parameters<typeof isAnyBoolean>,
    ReturnType<typeof isAnyBoolean>,
  ][] = [
    [false, true],
    [true, true],
    [new Boolean(false), true],
    [new Boolean(true), true],
    [Boolean, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyBoolean(value), result));
});

Deno.test("AnyBoolean", () => {
  const anyBoolean = new AnyBoolean();
  assertExists(anyBoolean["toString"]);
  assertExists(anyBoolean[equality]);
  assertEquals(anyBoolean.toString(), "any boolean");
  assertEquals(anyBoolean[equality](false), true);
  assertEquals(anyBoolean[equality](true), true);
  assertEquals(anyBoolean[equality](new Boolean(false)), true);
  assertEquals(anyBoolean[equality](Boolean), false);
  assertEquals(anyBoolean[equality]({}), false);
});

Deno.test("anyBoolean", () => {
  assertEquals(anyBoolean(), new AnyBoolean());
});
