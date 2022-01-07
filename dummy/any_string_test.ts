// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyString, anyString, isAnyString } from "./any_string.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { fn } from "../mock/fn.ts";
import { expect } from "../expect/expect.ts";
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
    const anyString = new AnyString();
    assertExists(anyString.toString);
    assertExists(anyString[equality]);

    assertEquals(anyString.toString(), "any string");
    assertEquals(anyString[equality](undefined), false);
    assertEquals(anyString[equality](null), false);
    assertEquals(anyString[equality](""), true);
  },
});

Deno.test({
  name: "AnyString with condition",
  fn: () => {
    const anyString = new AnyString((v) => /^[A-Z]+$/.test(v));

    assertEquals(anyString[equality]("test"), false);
    assertEquals(anyString[equality]("Test"), false);
    assertEquals(anyString[equality]("TEST"), true);

    const mockFn = fn(() => true);

    const anyStr = new AnyString(mockFn);
    anyStr[equality]("TEST");
    expect(mockFn).toHaveBeenCalledWith("TEST");
    expect(mockFn).toHaveReturnedWith(true);
  },
});

Deno.test({
  name: "anyString",
  fn: () => {
    assertEquals(anyString(), new AnyString());
  },
});
