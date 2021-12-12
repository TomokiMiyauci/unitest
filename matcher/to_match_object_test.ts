// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { predict, toMatchObject } from "./to_match_object.ts";

Deno.test("predict", () => {
  const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] = [
    [{}, {}, true],
    [{ a: "" }, {}, true],
    [{ a: { b: { c: {} } } }, {}, true],
    [{ a: "a" }, { a: "a" }, true],
    [{ a: "b" }, { a: "a" }, false],
    [{ a: "a", b: "b" }, { a: "a" }, true],
    [{ a: "a", b: "b" }, { a: "a", b: "b" }, true],
    [{ a: "a", b: "b" }, { a: "a", b: "b", c: "c" }, false],
    [{ a: {} }, { a: {} }, true],
    [{ a: { b: {} } }, { a: { b: {} } }, true],
    [{ a: { b: { c: "d" } } }, { a: { b: { c: "d" } } }, true],
    [{ a: { b: 1, c: 2 } }, { a: { b: 1, c: 2 } }, true],
    [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }, true],
    [{ a: { b: 1, c: 2 } }, { a: { b: 1 } }, true],
    [{ a: { b: 1, c: 2 } }, { a: { b: 1, c: 2, d: 3 } }, false],
    [{ a: { b: {}, c: [], d: undefined } }, { a: { b: {}, c: [] } }, true],
    [{ a: { b: { c: { d: 1, e: 2 } } } }, { a: { b: { c: { e: 2 } } } }, true],
    [{ a: { b: { c: { d: 1, e: 2 } } } }, { a: { b: { c: { e: 3 } } } }, false],
    [{}, { [Symbol.for("test")]: "" }, false],
    [{ [Symbol.for("test")]: "abc" }, { [Symbol.for("test")]: "abc" }, true],
    [{ [Symbol.for("test")]: "abc", d: {} }, {
      [Symbol.for("test")]: "abc",
      d: {},
    }, true],
    [{ [Symbol.for("hello")]: "abc" }, {
      [Symbol.for("world")]: "abc",
    }, false],
    [{ a: { [Symbol.for("world")]: "abc" } }, {
      a: { [Symbol.for("world")]: "abc" },
    }, true],
    [{ a: { [Symbol.for("a")]: "a", [Symbol.for("b")]: {} } }, {
      a: { [Symbol.for("a")]: "a" },
    }, true],
    [{
      a: {
        b: {
          c: { d: { [Symbol.for("a")]: {} }, e: {}, [Symbol.for("a")]: "a" },
        },
      },
    }, {
      a: { b: { c: { d: { [Symbol.for("a")]: {} } } } },
    }, true],

    [{ a: Symbol.for("test") }, { a: Symbol.for("test") }, true],
    [{ a: Symbol.for("a") }, { a: Symbol.for("b") }, false],
  ];

  table.forEach(([a, b, result]) => assertEquals(predict(a, b), result));
});

Deno.test({
  name: "toMatchObject",
  fn: () => {
    assertEquals(toMatchObject({ b: true }, { a: false }), {
      pass: false,
      expected: { a: false },
    });
  },
});
