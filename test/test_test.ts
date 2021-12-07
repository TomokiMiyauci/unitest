// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { test } from "./test.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals, assertThrows } from "../dev_deps.ts";

Deno.test("should throw when test name is empty", () => {
  const mock = fn();

  assertThrows(() => test("", mock));
});

Deno.test("should not throw any error", () => {
  assertEquals(
    test("any error", () => {
      throw Error("error");
    }),
    undefined,
  );
});
