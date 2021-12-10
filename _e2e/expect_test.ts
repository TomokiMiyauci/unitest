// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  defineExpect,
  expect,
  fn,
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
  toBeValidDate,
  toBeWithin,
  toContainAnyEntries,
  toContainAnyKeys,
  toContainAnyValues,
  toContainEntries,
  toContainEntry,
  toContainKeys,
  toContainValue,
  toContainValues,
  toEndWith,
  toEqualCaseInsensitive,
  toEqualIgnoringWhitespace,
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

test("passes when Date is valid", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeValidDate,
    },
    modifierMap: {
      not,
    },
  });
  expect(new Date("01/01/2018")).toBeValidDate();
  expect(new Date("01/90/2018")).not.toBeValidDate();
  expect(new Date("invalid")).not.toBeValidDate();
});

test("passes when number is within given bounds", () => {
  const expect = defineExpect({
    matcherMap: {
      toBeWithin,
    },
    modifierMap: {
      not,
    },
  });
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});

test("should be", () => {
  expect(0).toBe(0);
  expect(0).not.toBe(-0);
});

test("promise", async () => {
  await expect(Promise.resolve("test")).resolves.not.toBe("tes");
});

test("passes when object contains at least one of the given entries", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainAnyEntries,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainAnyEntries([
    ["a", "qux"],
    ["a", "foo"],
  ]);
  expect(object).toContainAnyEntries([
    ["a", "qux"],
    ["b", "bar"],
  ]);
  expect(object).not.toContainAnyEntries([["d", "qux"]]);
});

test("passes when object contains at least one matching key", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainAnyKeys,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "hello", b: "world" };
  expect(object).toContainAnyKeys(["a"]);
  expect(object).toContainAnyKeys(["b", "c"]);
  expect(object).not.toContainAnyKeys(["c"]);
});

test("passes when object contains at least one of the given values", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainAnyValues,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainAnyValues(["qux", "foo"]);
  expect(object).toContainAnyValues(["qux", "baz"]);
  expect(object).not.toContainAnyValues(["qux"]);
});

test("passes when object contains all of the given entries", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainEntries,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainEntries([["a", "foo"]]);
  expect(object).toContainEntries([
    ["c", "baz"],
    ["a", "foo"],
  ]);
  expect(object).not.toContainEntries([
    ["b", "qux"],
    ["a", "foo"],
  ]);
});

test("passes when object contains given entry", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainEntry,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainEntry(["a", "foo"]);
  expect(object).toContainEntry(["c", "baz"]);
  expect(object).not.toContainEntry(["a", "qux"]);
});

test("passes when array contains given value", () => {
  expect({ a: "foo", b: "bar" }).toContainEqual({ a: "foo" });
  expect({ a: "foo", b: "bar" }).not.toContainEqual({ c: "hoo" });
});

test("passes when object contains all keys", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainKeys,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainKeys(["a", "b"]);
  expect(object).toContainKeys(["b", "c"]);
  expect(object).not.toContainKeys(["d"]);
});

test("passes when object contains given value", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainValue,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainValue("foo");
  expect(object).toContainValue("bar");
  expect(object).not.toContainValue("qux");
});

test("passes when object contains all of the given values", () => {
  const expect = defineExpect({
    matcherMap: {
      toContainValues,
    },
    modifierMap: {
      not,
    },
  });
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainValues(["foo"]);
  expect(object).toContainValues(["baz", "bar"]);
  expect(object).not.toContainValues(["qux", "foo"]);
});

test("passes when array contains given value", () => {
  expect([1, 2, 3, 4, 5]).toContain(3);
  expect([{}, [], ""]).not.toContain(3);
});

test("passes when value is ends with given string", () => {
  const expect = defineExpect({
    matcherMap: {
      toEndWith,
    },
    modifierMap: {
      not,
    },
  });
  expect("hello world").toEndWith("world");
  expect("hello world").not.toEndWith("hello");
});

test("passes when strings are equal ignoring case", () => {
  const expect = defineExpect({
    matcherMap: {
      toEqualCaseInsensitive,
    },
    modifierMap: {
      not,
    },
  });

  expect("hello world").toEqualCaseInsensitive("hello world");
  expect("hello world").toEqualCaseInsensitive("HELLO WORLD");
});

test("passes if strings are equal ignoring white-space", () => {
  const expect = defineExpect({
    matcherMap: {
      toEqualIgnoringWhitespace,
    },
    modifierMap: {
      not,
    },
  });
  expect("SELECT * FROM TABLE WHERE CONDITION").toEqualIgnoringWhitespace(`
        SELECT * FROM TABLE
        WHERE CONDITION
    `);
  expect(".class { cssRule: value }").not.toEqualIgnoringWhitespace(`
        #id {
            cssRule: value
        }
    `);
});

test("passes when array contains given value", () => {
  expect({}).toEqual({});
});

test("passes when mock object called 2 times", () => {
  const mockObject = fn();
  mockObject();
  mockObject();
  expect(mockObject).toHaveBeenCalledTimes(2);
});

test("passes when mock object called with arg", () => {
  const mockObject = fn();
  mockObject(1, 2, 3);
  expect(mockObject).toHaveBeenCalledWith(1, 2, 3);
});

test("passes when mock object called", () => {
  const mockObject = fn();
  expect(mockObject).not.toHaveBeenCalled();
  mockObject();
  expect(mockObject).toHaveBeenCalled();
});

test("passes when mock object of last called with", () => {
  const mockObject = fn();
  mockObject(1, 2, 3);
  mockObject(4, 5, 6);
  expect(mockObject).toHaveBeenLastCalledWith(4, 5, 6);
  expect(mockObject).not.toHaveBeenLastCalledWith(1, 2, 3);
});

test("passes when mock object of last called with", () => {
  const mockObject = fn();
  mockObject("tomato");
  mockObject("potato");
  expect(mockObject).toHaveBeenNthCalledWith(1, "tomato");
  expect(mockObject).toHaveBeenNthCalledWith(2, "potato");
});

test("passes when mock object of last returned with", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);
  expect(mockObject).toHaveLastReturnedWith(7);
});

test("passes when object of length property equal to", () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect("abc").toHaveLength(3);
  expect("").not.toHaveLength(5);
});

test("passes when mock object of last returned with", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);
  expect(mockObject).toHaveNthReturnedWith(1, 3);
  expect(mockObject).toHaveNthReturnedWith(2, 7);
});

test("passes when check object property via keyPath", () => {
  expect({ a: "b" }).toHaveProperty("a");
  expect({ a: { b: { c: "d" } } }).toHaveProperty("a.b.c");
  expect({ a: { b: { c: "d" } } }).toHaveProperty(["a", "b", "c"]);
});

test("passes when mock object returned successfully times", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);

  expect(mockObject).toHaveReturnedTimes(2);
});

test("passes when mock object returned specific value", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);

  expect(mockObject).toHaveReturnedWith(7);
  expect(mockObject).toHaveReturnedWith(3);
});

test("passes when mock object returned at least once", () => {
  const mockObject = fn(() => true);
  expect(mockObject).not.toHaveReturned();
  mockObject();
  expect(mockObject).toHaveReturned();
});
