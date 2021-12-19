// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { trim } from "./trim.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("trim", () => {
  assertEquals(trim.type, "pre");

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

  table.forEach(([actual, result]) => assertEquals(trim.fn(actual), result));
});
