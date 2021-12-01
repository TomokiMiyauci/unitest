// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyString, anyString, isAnyString } from "./any_string.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyString", () => {
  const table: [
    ...Parameters<typeof isAnyString>,
    ReturnType<typeof isAnyString>,
  ][] = [
    ["", true],
    ["test", true],
    [new String("hello"), true],
    [String, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyString(value), result));
});

Deno.test({
  name: "AnyString",
  fn: () => {
    const anyNumber = new AnyString();
    assertExists(anyNumber.toString);
    assertExists(anyNumber[equality]);

    assertEquals(anyNumber.toString(), "any string");
    assertEquals(anyNumber[equality](undefined), false);
    assertEquals(anyNumber[equality](null), false);
    assertEquals(anyNumber[equality](""), true);
  },
});

Deno.test({
  name: "anyString",
  fn: () => {
    assertEquals(anyString(), new AnyString());
  },
});
