// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import {
  containAll,
  contains,
  containSome,
  hasPath,
  last,
  prop,
  propPath,
} from "./utils.ts";
import { stringify } from "../helper/format.ts";

Deno.test({
  name: "contains",
  fn: () => {
    const fn = () => {};

    const array = [
      1,
      0,
      "",
      "hello",
      false,
      true,
      undefined,
      null,
      NaN,
      fn,
      {
        foo: "bar",
      },
      ["foo"],
      [[]],
    ];
    array.forEach((value) => {
      assertEquals(
        contains(array, value),
        true,
        `returns true when array contains given value: ${stringify(value)}`,
      );
    });

    array.forEach((value) => {
      assertEquals(
        contains([], value),
        false,
        `returns false when array does not contain given value: ${
          stringify(value)
        }`,
      );
    });
  },
});

Deno.test({
  name: "containSome",
  fn: () => {
    const table: [
      ...Parameters<typeof containSome>,
      ReturnType<typeof containSome>,
    ][] = [
      [[], [], false],
      [[], [1], false],
      [[1, 2, 3], [2], true],
      [[1, 2, 3], [2, 3], true],
      [[1, 2, 3], [{}, [], 1], true],
    ];
    table.forEach(([target, part, result]) => {
      assertEquals(
        containSome(target, part),
        result,
      );
    });
  },
});

Deno.test({
  name: "containAll",
  fn: () => {
    const table: [
      ...Parameters<typeof containAll>,
      ReturnType<typeof containAll>,
    ][] = [
      [[], [], true],
      [["a", "b", "c"], ["a", "b"], true],
      [[1, 2, 3], [2], true],
      [[1, 2, 3], [2, 3], true],
      [[1, 2, [], 3, {}], [{}, [], 1], true],
      [[1, 2, [], 3, {}], [{}, [], 4], false],
    ];
    table.forEach(([target, part, result]) => {
      assertEquals(
        containAll(target, part),
        result,
      );
    });
  },
});

Deno.test({
  name: "prop",
  fn: () => {
    const table: [...Parameters<typeof prop>, ReturnType<typeof prop>][] = [
      ["", {}, undefined],
      ["a", { a: 1 }, 1],
      ["a", [], undefined],
      ["length", [], 0],
    ];

    table.forEach(([key, object, result]) =>
      assertEquals(prop(key, object), result)
    );
  },
});

Deno.test("last", () => {
  const table: [...Parameters<typeof last>, ReturnType<typeof last>][] = [
    [[], undefined],
    [[1, 2, 3], 3],
    [[{}, undefined, null], null],
  ];

  table.forEach(([value, result]) => assertEquals(last(value), result));
});

Deno.test({
  name: "propPath",
  fn: () => {
    const table: [object, PropertyKey[], unknown][] = [
      [{}, [], undefined],
      [{ a: 1 }, ["a"], 1],
      [{ a: { b: { c: {} } } }, ["a", "b", "c"], {}],
      [{ a: { b: { d: {} } } }, ["a", "b", "c"], undefined],
      [[], [], undefined],
      [[1], [0], 1],
      [[1], [], undefined],
    ];

    table.forEach(([object, path, result]) =>
      assertEquals(propPath(path, object), result)
    );
  },
});

Deno.test({
  name: "hasPath",
  fn: () => {
    const symbol = Symbol.for("test");
    const table: [object, PropertyKey[], boolean][] = [
      [{}, [], false],
      [{ a: 1 }, ["a"], true],
      [{ a: { b: { c: {} } } }, ["a", "b", "c"], true],
      [{ a: { b: { d: {} } } }, ["a", "b", "c"], false],
      [[], [], false],
      [[1], [0], true],
      [[1], [], false],
      [{ [symbol]: undefined }, [symbol], true],
    ];

    table.forEach(([object, path, result]) =>
      assertEquals(hasPath(path, object), result)
    );
  },
});
