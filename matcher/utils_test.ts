// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { contains, stringify } from "./utils.ts";

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
