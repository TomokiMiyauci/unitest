// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  defineExpect,
  expect,
  not,
  test,
  toBeAfterOrEqualTo,
  toStartWith,
  toThrow,
} from "../mod.ts";

test({
  name: "should not occur error",
  fn: () => {
    expect({ a: "" }).toHaveProperty("a");
  },
});

test({
  name: "toStartWith",
  fn: () => {
    const expect = defineExpect({
      matcherMap: {
        toStartWith,
        toThrow,
      },
    });

    expect("abcde").toStartWith("abc");
  },
});

test("passes when input is equal to or after date", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeAfterOrEqualTo,
    },
    modifierMap: {
      not,
    },
  });

  expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2018"));
  expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2019"));
  expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2020"));
});
