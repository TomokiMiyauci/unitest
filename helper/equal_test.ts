// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal, equality, isEquality, stringifyEquality } from "./equal.ts";
import { anything } from "../expect/anything.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("equality", () => assertEquals(equality, Symbol.for("equality")));

Deno.test("isEquality", () => {
  const table: [
    ...Parameters<typeof isEquality>,
    ReturnType<typeof isEquality>,
  ][] = [
    [{}, false],
    [[], false],
    [{
      [equality]: true,
    }, true],
    [{
      [equality]: () => true,
    }, true],
  ];

  table.forEach(([value, result]) => assertEquals(isEquality(value), result));
});

Deno.test("equal", () => {
  const table: [
    ...Parameters<typeof equal>,
    ReturnType<typeof equal>,
  ][] = [
    [null, anything(), false],
    [{}, anything(), true],
    [{}, {}, true],
  ];

  table.forEach(([a, b, result]) => assertEquals(equal(a, b), result));

  const mock = fn();
  equal({}, {
    [equality]: mock,
  });

  assertEquals(mock.mock.calls.length, 1);
});

Deno.test("stringifyEquality", () => {
  const table: [
    ...Parameters<typeof stringifyEquality>,
    ReturnType<typeof stringifyEquality>,
  ][] = [
    [false, false],
    [[], []],
    [{
      [equality]: true,
      toString: () => "equal",
    }, "equal"],
    [{
      [equality]: true,
      toString: () => "any",
    }, "any"],
  ];

  table.forEach(([value, result]) =>
    assertEquals(stringifyEquality(value), result)
  );
});
