// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  defineExpect,
  expect,
  not,
  test,
  toBeAfter,
  toBeAfterOrEqualTo,
  toBeArray,
  toBeBefore,
  toBeBeforeOrEqualTo,
  toBeBetween,
  toBeBoolean,
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
  expect(new Date("01/01/2019")).not.toBeAfterOrEqualTo(new Date("01/01/2020"));
});

test("passes when input is after date", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeAfter,
    },
    modifierMap: {
      not,
    },
  });

  expect(new Date("01/01/2019")).toBeAfter(new Date("01/01/2018"));
  expect(new Date("01/01/2018")).not.toBeAfter(new Date("01/01/2019"));
});

test("passes when value is an array", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeArray,
    },
    modifierMap: {
      not,
    },
  });

  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});

test("passes when input is equal to or before date", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeBeforeOrEqualTo,
    },
    modifierMap: {
      not,
    },
  });
  expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2019"));
  expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2018"));
  expect(new Date("01/01/2019")).not.toBeBeforeOrEqualTo(
    new Date("01/01/2018"),
  );
});

test("passes when input is before date", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeBefore,
    },
    modifierMap: {
      not,
    },
  });

  expect(new Date("01/01/2018")).toBeBefore(new Date("01/01/2019"));
  expect(new Date("01/01/2019")).not.toBeBefore(new Date("01/01/2018"));
});

test("passes when input is in given date range", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeBetween,
    },
    modifierMap: {
      not,
    },
  });

  expect(new Date("05/01/2019")).toBeBetween(
    new Date("01/01/2019"),
    new Date("10/01/2019"),
  );
  expect(new Date("05/01/2019")).toBeBetween(
    new Date("05/01/2019"),
    new Date("10/01/2019"),
  );
  expect(new Date("01/01/2019")).not.toBeBetween(
    new Date("05/01/2019"),
    new Date("10/01/2019"),
  );
});

test("passes when value is a boolean", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeBoolean,
    },
    modifierMap: {
      not,
    },
  });
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});

test("adding works sanely with decimals", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});
