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
  toBeFunction,
  toBeHexColor,
  toBeInteger,
  toBeNegative,
  toBeNil,
  toBeNumber,
  toBeObject,
  toBeOdd,
  toBeOneOf,
  toBePositive,
  toBeSealed,
  toBeString,
  toBeSymbol,
  toBeTrue,
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

test("passes when value is a function", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeFunction,
    },
    modifierMap: {
      not,
    },
  });
  expect(() => {}).toBeFunction();
  expect(function () {}).toBeFunction();
  expect(true).not.toBeFunction();
});

test("passes when value greater than or equal to", () => {
  expect(100).toBeGreaterThanOrEqual(99);
  expect(100n).toBeGreaterThanOrEqual(100n);
  expect(0).not.toBeGreaterThanOrEqual(1);
});

test("passes when value greater than", () => {
  expect(100).toBeGreaterThan(99);
  expect(100n).toBeGreaterThan(99n);
  expect(1).not.toBeGreaterThan(1);
});

test("passes when value is a valid hex color", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeHexColor,
    },
    modifierMap: {
      not,
    },
  });
  expect("#abc123").toBeHexColor();
  expect("#FFF").toBeHexColor();
  expect("#000000").toBeHexColor();
  expect("#123ffg").not.toBeHexColor();
});

test("passes when value is instance of class", () => {
  class A {}
  expect(new A()).toBeInstanceOf(A);
  expect(() => {}).toBeInstanceOf(Function);
  expect(new A()).not.toBeInstanceOf(Function);
});

test("passes when value is an integer", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeInteger,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBeInteger();
  expect(1.0).toBeInteger();
  expect(1.1).not.toBeInteger();
});

test("passes when value less than or equal to", () => {
  expect(99).toBeLessThanOrEqual(100);
  expect(100n).toBeLessThanOrEqual(100n);
  expect(1).not.toBeLessThanOrEqual(0);
});

test("passes when value less than", () => {
  expect(99).toBeLessThan(100);
  expect(99n).toBeLessThan(100n);
  expect(1).not.toBeLessThan(0);
});

test("passes when value less than", () => {
  expect(NaN).toBeNaN();
  expect(-NaN).toBeNaN();
  expect(1).not.toBeNaN();
});

test("passes when value is a negative number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeNegative,
    },
    modifierMap: {
      not,
    },
  });
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});

test("passes when value is null or undefined", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeNil,
    },
    modifierMap: {
      not,
    },
  });
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});

test("passes when value is null", () => {
  expect(null).toBeNull();
  expect(undefined).not.toBeNull();
});

test("passes when value is a number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeNumber,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});

test("passes when value is an object", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeObject,
    },
    modifierMap: {
      not,
    },
  });
  expect({}).toBeObject();
  expect({ a: "hello" }).toBeObject();
  expect(true).not.toBeObject();
});

test("passes when value is an odd number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeOdd,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});

test("passes when value is in given array", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeOneOf,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBeOneOf([1, 2, 3]);
  expect(4).not.toBeOneOf([1, 2, 3]);
});

test("passes when value is a positive number", () => {
  const expect = defineExpect({
    matcherMap: {
      toBePositive,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});

test("passes when value is sealed", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeSealed,
    },
    modifierMap: {
      not,
    },
  });
  expect(Object.seal({})).toBeSealed();
  expect(1).toBeSealed();
  expect({}).not.toBeSealed();
});

test("passes when value is a string", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeString,
    },
    modifierMap: {
      not,
    },
  });
  expect("").toBeString();
  expect("hello").toBeString();
  expect(new String("hello")).not.toBeString();
});

test("passes when value is a symbol", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeSymbol,
    },
    modifierMap: {
      not,
    },
  });
  expect(Symbol()).toBeSymbol();
  expect(true).not.toBeSymbol();
});

test("passes when value is true", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeTrue,
    },
    modifierMap: {
      not,
    },
  });
  expect(true).toBeTrue();
  expect(false).not.toBeTrue();
});

test("should be truthy", () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect(0).not.toBeTruthy();
});

test("should be truthy", () => {
  expect(undefined).toBeUndefined();
  expect(null).not.toBeUndefined();
});
