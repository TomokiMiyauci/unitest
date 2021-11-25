// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { contains, hasPath, propPath } from "./utils.ts";
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
