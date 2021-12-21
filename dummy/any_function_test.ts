// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertExists } from "../dev_deps.ts";
import { AnyFunction, anyFunction, isAnyFunction } from "./any_function.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyFunction", () => {
  const table: [
    ...Parameters<typeof isAnyFunction>,
    ReturnType<typeof isAnyFunction>,
  ][] = [
    [new Function(), true],
    [() => {}, true],
    [class A {}, true],
    [Function, true],
    [String, true],
    [Number, true],
    [{}, false],
  ];

  table.forEach(([value, result]) =>
    assertEquals(isAnyFunction(value), result)
  );
});

Deno.test("AnyFunction", () => {
  const anyFunction = new AnyFunction();
  assertExists(anyFunction["toString"]);
  assertExists(anyFunction[equality]);
  assertEquals(anyFunction.toString(), "any function");
  assertEquals(anyFunction[equality](() => {}), true);
  assertEquals(anyFunction[equality](function test() {}), true);
  assertEquals(anyFunction[equality](class test {}), true);
  assertEquals(anyFunction[equality](false), false);
  assertEquals(anyFunction[equality](true), false);
});

Deno.test("anyFunction", () => {
  assertEquals(anyFunction(), new AnyFunction());
});
