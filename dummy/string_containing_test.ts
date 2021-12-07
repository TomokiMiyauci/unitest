// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { StringContaining, stringContaining } from "./string_containing.ts";
import { assertEquals, assertExists, assertThrows } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("stringContaining", () => {
  assertEquals(stringContaining(""), new StringContaining(""));
});

Deno.test({
  name: "StringContaining",
  fn: () => {
    const stringContaining = new StringContaining("");
    assertExists(stringContaining.toString);
    assertExists(stringContaining[equality]);

    assertEquals(stringContaining.toString(), "string containing");
    assertThrows(
      () => stringContaining[equality](undefined),
      TypeError,
      "Actual must be string",
    );

    assertEquals(stringContaining[equality](""), true);
    assertEquals(new StringContaining("t")[equality]("test"), true);
  },
});
