// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  equal,
  equalDate,
  equality,
  isEquality,
  stringifyEquality,
} from "./equal.ts";
import { anything } from "../dummy/anything.ts";
import { anyNumber } from "../dummy/any_number.ts";
import { anyString } from "../dummy/any_string.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("equalDate", () => {
  const table: [
    ...Parameters<typeof equalDate>,
    ReturnType<typeof equalDate>,
  ][] = [
    [new Date("2022/1/1"), new Date("2022/1/1"), true],
    [new Date("invalid"), new Date("nan"), true],
    [new Date("2022/1/1 00:00:01"), new Date("2022/1/1 00:00:00"), false],
  ];

  table.forEach(([a, b, result]) => assertEquals(equalDate(a, b), result));
});

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

Deno.test("equal", () => {
  const table: [...Parameters<typeof equal>, ReturnType<typeof equal>][] = [
    ["world", "world", true],
    ["hello", "world", false],
    [5, 5, true],
    [5, 6, false],
    [NaN, NaN, true],
    [{ hello: "world" }, { hello: "world" }, true],
    [{ world: "hello" }, { hello: "world" }, false],
    [{ hello: "world", hi: { there: "everyone" } }, {
      hello: "world",
      hi: { there: "everyone" },
    }, true],
    [{
      hello: "world",
      hi: { there: "everyone" },
    }, {
      hello: "world",
      hi: { there: "everyone else" },
    }, false],
    [{ [Symbol.for("foo")]: "bar" }, { [Symbol.for("foo")]: "bar" }, true],
    [{ [Symbol("foo")]: "bar" }, { [Symbol("foo")]: "bar" }, false],
    [/deno/, /deno/, true],
    [/deno/, /node/, false],
    [new Date(2019, 0, 3), new Date(2019, 0, 3), true],
    [new Date(2019, 0, 3), new Date(2019, 1, 3), false],
    [
      new Date(2019, 0, 3, 4, 20, 1, 10),
      new Date(2019, 0, 3, 4, 20, 1, 20),
      false,
    ],
    [new Date("Invalid"), new Date("Invalid"), true],
    [new Date("Invalid"), new Date(2019, 0, 3), false],
    [new Date("Invalid"), new Date(2019, 0, 3, 4, 20, 1, 10), false],
    [new Set([1]), new Set([1]), true],
    [new Set([1]), new Set([2]), false],
    [new Set([1, 2, 3]), new Set([3, 2, 1]), true],
    [new Set([1, new Set([2, 3])]), new Set([new Set([3, 2]), 1]), true],
    [new Set([1, 2]), new Set([3, 2, 1]), false],
    [new Set([1, 2, 3]), new Set([4, 5, 6]), false],
    // should false ?
    [new Set("denosaurus"), new Set("denosaurussss"), true],
    [new Map(), new Map(), true],
    [
      new Map([
        ["foo", "bar"],
        ["baz", "baz"],
      ]),
      new Map([
        ["foo", "bar"],
        ["baz", "baz"],
      ]),
      true,
    ],
    [
      new Map([["foo", new Map([["bar", "baz"]])]]),
      new Map([["foo", new Map([["bar", "baz"]])]]),
      true,
    ],
    [
      new Map([["foo", { bar: "baz" }]]),
      new Map([["foo", { bar: "baz" }]]),
      true,
    ],
    [
      new Map([
        ["foo", "bar"],
        ["baz", "qux"],
      ]),
      new Map([
        ["baz", "qux"],
        ["foo", "bar"],
      ]),
      true,
    ],
    [
      new Map([["foo", ["bar"]]]),
      new Map([["foo", ["bar"]]]),
      true,
    ],
    [
      new Map([["foo", "bar"]]),
      new Map([["bar", "baz"]]),
      false,
    ],
    [
      new Map([["foo", "bar"]]),
      new Map([
        ["foo", "bar"],
        ["bar", "baz"],
      ]),
      false,
    ],
    [
      new Map([["foo", new Map([["bar", "baz"]])]]),
      new Map([["foo", new Map([["bar", "qux"]])]]),
      false,
    ],
    [
      new Map([[{ x: 1 }, true]]),
      new Map([[{ x: 1 }, true]]),
      true,
    ],
    [
      new Map([[{ x: 1 }, true]]),
      new Map([[{ x: 1 }, false]]),
      false,
    ],
    [
      new Map([[{ x: 1 }, true]]),
      new Map([[{ x: 2 }, true]]),
      false,
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      true,
    ],
    [
      [1, [2, 3]],
      [1, [2, 3]],
      true,
    ],
    [
      [1, 2, 3, 4],
      [1, 2, 3],
      false,
    ],
    [
      [1, 2, 3, 4],
      [1, 4, 2, 3],
      false,
    ],
    [[, 1], [undefined, 1], false],
    [
      new Uint8Array([1, 2, 3, 4]),
      new Uint8Array([1, 2, 3, 4]),
      true,
    ],
    [
      new Uint8Array([1, 2, 3, 4]),
      new Uint8Array([2, 1, 4, 3]),
      false,
    ],
    [
      new URL("https://example.test"),
      new URL("https://example.test"),
      true,
    ],
    [
      new URL("https://example.test"),
      new URL("https://example.test/with-path"),
      false,
    ],
    [
      { a: undefined, b: undefined },
      { a: undefined, c: undefined },
      false,
    ],
    [
      { a: undefined, b: undefined },
      { a: undefined },
      false,
    ],
    [
      new WeakMap(),
      new WeakMap(),
      false,
    ],
    [
      new WeakMap(),
      [],
      false,
    ],
    [
      [],
      new WeakMap(),
      false,
    ],

    [
      new WeakSet(),
      new WeakSet(),
      false,
    ],
    [
      new WeakRef({ hello: "world" }),
      new WeakRef({ hello: "world" }),
      true,
    ],
    [
      new WeakRef({ world: "hello" }),
      new WeakRef({ hello: "world" }),
      false,
    ],
    [
      { hello: "world" },
      new WeakRef({ hello: "world" }),
      false,
    ],
    [
      new WeakRef({ hello: "world" }),
      new (class<T extends object> extends WeakRef<T> {})({ hello: "world" }),
      false,
    ],
    [
      new WeakRef({ hello: "world" }),
      new (class<T extends object> extends WeakRef<T> {
        foo = "bar";
      })({ hello: "world" }),
      false,
    ],
    [
      new class A {
        private hello = "world";
      }(),
      new class B {
        private hello = "world";
      }(),
      false,
    ],
    ["", anything(), true],
    [null, anything(), false],
    [undefined, anything(), false],
    [1, anyNumber(), true],
    [1n, anyNumber(), false],
    [{ a: 1 }, { a: anyNumber() }, true],
    [{ a: 1 }, { a: anyNumber() }, true],
    [{ a: 1n }, { a: anyNumber() }, false],
    [{ a: 1, b: "" }, { a: anyNumber(), b: anyString() }, true],
    [[1], [anyNumber()], true],
    [[1n], [anyNumber()], false],
    [[1, "test", false], [anyNumber(), anyString(), anything()], true],
    [
      [1, "test", false, {}, []],
      [anyNumber(), anyString(), anything(), {}, []],
      true,
    ],
    [[{}], [{}], true],
    [
      [{
        a: 1,
        b: [],
        c: "test",
      }, [1, "test", false]],
      [{ a: anyNumber(), b: [], c: anyString() }, [1, anyString(), false]],
      true,
    ],
    [
      [{
        a: 1,
        b: [],
        c: "test",
      }, [1, "test", false]],
      [{ a: anyNumber(), b: [], c: anyString() }, [1, anyString(), true]],
      false,
    ],
    [
      anyNumber(),
      1,
      true,
    ],
    [
      anyNumber(),
      anyNumber(),
      false,
    ],
  ];

  table.forEach(([a, b, result]) => assertEquals(equal(a, b), result));
});
