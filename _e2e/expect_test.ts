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
  toBeDate,
  toBeDateString,
  toBeEmpty,
  toBeEmptyObject,
  toBeEven,
  toBeExtensible,
  toBeFalse,
  toBeFinite,
  toBeFrozen,
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

test("passes when value is a valid toBeDateString", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeDateString,
    },
    modifierMap: {
      not,
    },
  });

  expect("2019-11-27T14:05:07.520Z").toBeDateString();
  expect("11/12/21").toBeDateString();
  expect("not a date").not.toBeDateString();
});

test("passes when value is a date", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeDate,
    },
    modifierMap: {
      not,
    },
  });

  expect(new Date("01/01/2018")).toBeDate();
  expect("01/01/2018").not.toBeDate();
  expect(undefined).not.toBeDate();
});

test("there is a new flavor idea", () => {
  expect("defined").toBeDefined();
  expect(undefined).not.toBeDefined();
});

test("passes when value is an empty object", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeEmptyObject,
    },
    modifierMap: {
      not,
    },
  });

  expect({}).toBeEmptyObject();
  expect([]).toBeEmptyObject();
  expect({ a: "hello" }).not.toBeEmptyObject();
});

test("passes when given an empty", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeEmpty,
    },
  });

  expect("").toBeEmpty();
  expect([]).toBeEmpty();
  expect({}).toBeEmpty();
  expect(new Map()).toBeEmpty();
});

test("passes when value is an even number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeEven,
    },
    modifierMap: {
      not,
    },
  });

  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});

test("passes when value is extensible", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeExtensible,
    },
    modifierMap: {
      not,
    },
  });
  expect({ a: 1 }).toBeExtensible();
  expect(1).not.toBeExtensible();
});

test("should be false", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeFalse,
    },
    modifierMap: {
      not,
    },
  });

  expect(false).toBeFalse();
  expect(true).not.toBeFalse();
});

test("should be falsy", () => {
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect(1).not.toBeFalsy();
});

test("passes when value is a finite number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeFinite,
    },
    modifierMap: {
      not,
    },
  });

  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});

test("passes when value is frozen", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeFrozen,
    },
    modifierMap: {
      not,
    },
  });

  expect(Object.freeze({})).toBeFrozen();
  expect(1).toBeFrozen();
  expect({}).not.toBeFrozen();
});
