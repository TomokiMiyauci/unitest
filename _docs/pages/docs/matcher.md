# matcher

Unitest provide various matchers. It is fully configurable and can be customised
by selecting the matcher you want to use.

## preset

Unitest offers a range of presets for different matchers.

| module                                                           | preset                   |
| ---------------------------------------------------------------- | ------------------------ |
| [jest](https://jestjs.io/ja/docs/expect)                         | `jestMatcherMap`         |
| [jest-extended](https://github.com/jest-community/jest-extended) | `jestExtendedMatcherMap` |

```ts
import {
  defineExpect,
  jestExtendedMatcherMap,
  jestMatcherMap,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const { toBeString } = jestExtendedMatcherMap;

const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    toBeString,
    toBeFoo: (actual: unknown) => {
      return {
        pass: actual === "foo",
        expected: "foo",
      };
    },
  },
});
```

## toBeAfterOrEqualTo

preset: `jestExtendedMatcherMap`

Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after
`date`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeAfterOrEqualTo,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeAfterOrEqualTo,
  },
  modifierMap: {
    not,
  },
});

test("passes when input is equal to or after date", () => {
  expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2018"));
  expect(new Date("01/01/2019")).toBeAfterOrEqualTo(new Date("01/01/2019"));
  expect(new Date("01/01/2019")).not.toBeAfterOrEqualTo(new Date("01/01/2020"));
});
```

## toBeAfter

preset: `jestExtendedMatcherMap`

Use `.toBeAfter` when checking if a date occurs after date.

```ts
import {
  defineExpect,
  not,
  test,
  toBeAfter,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeAfter,
  },
  modifierMap: {
    not,
  },
});

test("passes when input is after date", () => {
  expect(new Date("01/01/2019")).toBeAfter(new Date("01/01/2018"));
  expect(new Date("01/01/2018")).not.toBeAfter(new Date("01/01/2019"));
});
```

## toBeArray

preset: `jestExtendedMatcherMap`

Use `.toBeArray` when checking if a value is an Array.

```ts
import {
  defineExpect,
  not,
  test,
  toBeArray,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeArray,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an array", () => {
  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});
```

## toBeBeforeOrEqualTo

preset: `jestExtendedMatcherMap`

Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before
`date`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeBeforeOrEqualTo,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeBeforeOrEqualTo,
  },
  modifierMap: {
    not,
  },
});

test("passes when input is equal to or before date", () => {
  expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2019"));
  expect(new Date("01/01/2018")).toBeBeforeOrEqualTo(new Date("01/01/2018"));
  expect(new Date("01/01/2019")).not.toBeBeforeOrEqualTo(
    new Date("01/01/2018"),
  );
});
```

## toBeBefore(date)

preset: `jestExtendedMatcherMap`

Use `.toBeBefore` when checking if a date occurs before `date`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeBefore,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeBefore,
  },
  modifierMap: {
    not,
  },
});

test("passes when input is before date", () => {
  expect(new Date("01/01/2018")).toBeBefore(new Date("01/01/2019"));
  expect(new Date("01/01/2019")).not.toBeBefore(new Date("01/01/2018"));
});
```

## toBeBetween

preset: `jestExtendedMatcherMap`

Use `.toBeBetween` when checking if a date equals or occurs after `startDate`
and equals or occurs before `endDate`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeBetween,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeBetween,
  },
  modifierMap: {
    not,
  },
});

test("passes when input is in given date range", () => {
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
```

## toBeBoolean

preset: `jestExtendedMatcherMap`

Use `.toBeBoolean` when checking if a value is a `boolean`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeBoolean,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeBoolean,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a boolean", () => {
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});
```

## toBeCloseTo

preset: `jestMatcherMap`

Use `.toBeCloseTo` to compare floating point numbers for approximate equality.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("adding works sanely with decimals", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});
```

## toBeDateString

preset: `jestExtendedMatcherMap`

Use `.toBeDateString` when checking if a value is a valid date string.

```ts
import {
  defineExpect,
  not,
  test,
  toBeDateString,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeDateString,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a valid toBeDateString", () => {
  expect("2019-11-27T14:05:07.520Z").toBeDateString();
  expect("11/12/21").toBeDateString();
  expect("not a date").not.toBeDateString();
});
```

## toBeDate

preset: `jestExtendedMatcherMap`

Use `.toBeDate` when checking if a value is a Date.

```ts
import {
  defineExpect,
  not,
  test,
  toBeDate,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeDate,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a date", () => {
  expect(new Date("01/01/2018")).toBeDate();
  expect("01/01/2018").not.toBeDate();
  expect(undefined).not.toBeDate();
});
```

## toBeDefined

preset: `jestMatcherMap`

Use `.toBeDefined` to check that a variable is not undefined.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("there is a new flavor idea", () => {
  expect("defined").toBeDefined();
  expect(undefined).not.toBeDefined();
});
```

## toBeEmptyObject

preset: `jestExtendedMatcherMap`

Use `.toBeEmptyObject` when checking if a value is an empty Object.

```ts
import {
  defineExpect,
  not,
  test,
  toBeEmptyObject,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeEmptyObject,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an empty object", () => {
  expect({}).toBeEmptyObject();
  expect([]).toBeEmptyObject();
  expect({ a: "hello" }).not.toBeEmptyObject();
});
```

## toBeEmpty

preset: `jestExtendedMatcherMap`

Use `.toBeEmpty` when checking if a String `''`, `Array` `[]`, `Object` `{}`, or
`Iterable` is empty.

```ts
import {
  defineExpect,
  test,
  toBeEmpty,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeEmpty,
  },
});

test("passes when given an empty", () => {
  expect("").toBeEmpty();
  expect([]).toBeEmpty();
  expect({}).toBeEmpty();
  expect(new Map()).toBeEmpty();
});
```

## toBeEven

preset: `jestExtendedMatcherMap`

Use `.toBeEven` when checking if a value is an even `Number`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeEven,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeEven,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an even number", () => {
  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});
```

## toBeExtensible

preset: `jestExtendedMatcherMap`

Use `.toBeExtensible` when checking if an object is extensible.

```ts
import {
  defineExpect,
  not,
  test,
  toBeExtensible,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeExtensible,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is extensible", () => {
  expect({ a: 1 }).toBeExtensible();
  expect(1).not.toBeExtensible();
});
```

## toBeFalse

preset: `jestExtendedMatcherMap`

Use `.toBeFalse` when checking a value is equal (===) to false.

```ts
import {
  defineExpect,
  not,
  test,
  toBeFalse,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeFalse,
  },
  modifierMap: {
    not,
  },
});

test("should be false", () => {
  expect(false).toBeFalse();
  expect(true).not.toBeFalse();
});
```

## toBeFalsy

preset: `jestMatcherMap`

Use `.toBeFalsy` when you don't care what a value is and you want to ensure a
value is false in a boolean context.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be falsy", () => {
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect(1).not.toBeFalsy();
});
```

## toBeFinite

preset: `jestExtendedMatcherMap`

Use `.toBeFinite` when checking if a value is a `number`, not `NaN` or
`Infinity`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeFinite,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeFinite,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a finite number", () => {
  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});
```

## toBeFrozen

preset: `jestExtendedMatcherMap`

Use `.toBeFrozen` when checking if an object is frozen.

```ts
import {
  defineExpect,
  not,
  test,
  toBeFrozen,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeFrozen,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is frozen", () => {
  expect(Object.freeze({})).toBeFrozen();
  expect(1).toBeFrozen();
  expect({}).not.toBeFrozen();
});
```

## toBeFunction

preset: `jestExtendedMatcherMap`

Use `.toBeFunction` when checking if a value is a `Function`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeFunction,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeFunction,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a function", () => {
  expect(() => {}).toBeFunction();
  expect(function () {}).toBeFunction();
  expect(true).not.toBeFunction();
});
```

## toBeGreaterThanOrEqual

preset: `jestMatcherMap`

Use `.toBeGreaterThanOrEqual` to compare `actual >= expected` for `number` or
`bigint`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value greater than or equal to", () => {
  expect(100).toBeGreaterThanOrEqual(99);
  expect(100n).toBeGreaterThanOrEqual(100n);
  expect(0).not.toBeGreaterThanOrEqual(1);
});
```

## toBeGreaterThan

preset: `jestMatcherMap`

Use `.toBeGreaterThan` to compare `actual > expected` for `number` or `bigint`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value greater than", () => {
  expect(100).toBeGreaterThan(99);
  expect(100n).toBeGreaterThan(99n);
  expect(1).not.toBeGreaterThan(1);
});
```

## toBeHexColor

preset: `jestExtendedMatcherMap`

Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.

```ts
import {
  defineExpect,
  not,
  test,
  toBeHexColor,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeHexColor,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a valid hex color", () => {
  expect("#abc123").toBeHexColor();
  expect("#FFF").toBeHexColor();
  expect("#000000").toBeHexColor();
  expect("#123ffg").not.toBeHexColor();
});
```

## toBeInstanceOf

preset: `jestMatcherMap`

Use `.toBeInstanceOf` to check that an object is an instance of a class.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value is instance of class", () => {
  class A {}
  expect(new A()).toBeInstanceOf(A);
  expect(() => {}).toBeInstanceOf(Function);
  expect(new A()).not.toBeInstanceOf(Function);
});
```

## toBeInteger

preset: `jestExtendedMatcherMap`

Use `.toBeInteger` when checking if a number is an integer.

```ts
import {
  defineExpect,
  not,
  test,
  toBeInteger,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeInteger,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an integer", () => {
  expect(1).toBeInteger();
  expect(1.0).toBeInteger();
  expect(1.1).not.toBeInteger();
});
```

## toBeLessThanOrEqual

preset: `jestMatcherMap`

Use `.toBeLessThanOrEqual` to compare `actual <= expected` for `number` or
`bigint`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value less than or equal to", () => {
  expect(99).toBeLessThanOrEqual(100);
  expect(100n).toBeLessThanOrEqual(100n);
  expect(1).not.toBeLessThanOrEqual(0);
});
```

## toBeLessThan

preset: `jestMatcherMap`

Use `.toBeLessThan` to compare `actual < expected` for `number` or `bigint`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value less than", () => {
  expect(99).toBeLessThan(100);
  expect(99n).toBeLessThan(100n);
  expect(1).not.toBeLessThan(0);
});
```

## toBeNaN

preset: `jestMatcherMap`

Use `.toBeNaN` when checking a value is `NaN`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value less than", () => {
  expect(NaN).toBeNaN();
  expect(-NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
```

## toBeNegative

preset: `jestExtendedMatcherMap`

Use `.toBeNegative` when checking if a value is a negative `number`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeNegative,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeNegative,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a negative number", () => {
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});
```

## toBeNil

preset: `jestExtendedMatcherMap`

Use `.toBeNil` when checking a value is `null` or `undefined`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeNil,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeNil,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is null or undefined", () => {
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});
```

## toBeNull

preset: `jestMatcherMap`

Use `.toBeNull` when checking a value is `null`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value is null", () => {
  expect(null).toBeNull();
  expect(undefined).not.toBeNull();
});
```

## toBeNumber

preset: `jestExtendedMatcherMap`

Use `.toBeNumber` when checking if a value is a `number`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeNumber,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeNumber,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a number", () => {
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});
```

## toBeObject

preset: `jestExtendedMatcherMap`

Use `.toBeObject` when checking if a value is an `Object`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeObject,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeObject,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an object", () => {
  expect({}).toBeObject();
  expect({ a: "hello" }).toBeObject();
  expect(true).not.toBeObject();
});
```

## toBeOdd

preset: `jestExtendedMatcherMap`

Use `.toBeOdd` when checking if a value is an odd `number`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeOdd,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeOdd,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is an odd number", () => {
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});
```

## toBeOneOf

preset: `jestExtendedMatcherMap`

Use `.toBeOneOf` when checking if a value is a member of a given `Array`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeOneOf,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeOneOf,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is in given array", () => {
  expect(1).toBeOneOf([1, 2, 3]);
  expect(4).not.toBeOneOf([1, 2, 3]);
});
```

## toBePositive

preset: `jestExtendedMatcherMap`

Use `.toBePositive` when checking if a value is a positive `number`.

```ts
import {
  defineExpect,
  not,
  test,
  toBePositive,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBePositive,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a positive number", () => {
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});
```

## toBeSealed

preset: `jestExtendedMatcherMap`

Use `.toBeSealed` when checking if an value is sealed.

```ts
import {
  defineExpect,
  not,
  test,
  toBeSealed,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeSealed,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is sealed", () => {
  expect(Object.seal({})).toBeSealed();
  expect(1).toBeSealed();
  expect({}).not.toBeSealed();
});
```

## toBeString

preset: `jestExtendedMatcherMap`

Use `.toBeString` when checking if a value is a `string`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeString,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeString,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a string", () => {
  expect("").toBeString();
  expect("hello").toBeString();
  expect(new String("hello")).not.toBeString();
});
```

## toBeSymbol

preset: `jestExtendedMatcherMap`

Use `.toBeSymbol` when checking if a value is a `symbol`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeSymbol,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeSymbol,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is a symbol", () => {
  expect(Symbol()).toBeSymbol();
  expect(true).not.toBeSymbol();
});
```

## toBeTrue

preset: `jestExtendedMatcherMap`

Use `.toBeTrue` when checking a value is `true`.

```ts
import {
  defineExpect,
  not,
  test,
  toBeTrue,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeTrue,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is true", () => {
  expect(true).toBeTrue();
  expect(false).not.toBeTrue();
});
```

## toBeTruthy

preset: `jestMatcherMap`

Use `.toBeTruthy` when you don't care what a value is and you want to ensure a
value is true in a boolean context.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be truthy", () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect(0).not.toBeTruthy();
});
```

## toBeUndefined

preset: `jestMatcherMap`

Use `.toBeUndefined` to check that a value is `undefined`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be truthy", () => {
  expect(undefined).toBeUndefined();
  expect(null).not.toBeUndefined();
});
```

## toBeValidDate

preset: `jestExtendedMatcherMap`

Use `.toBeValidDate` when check that a `Date` is valid.

```ts
import {
  defineExpect,
  not,
  test,
  toBeValidDate,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeValidDate,
  },
  modifierMap: {
    not,
  },
});

test("passes when Date is valid", () => {
  expect(new Date("01/01/2018")).toBeValidDate();
  expect(new Date("01/90/2018")).not.toBeValidDate();
  expect(new Date("invalid")).not.toBeValidDate();
});
```

## toBeWithin

preset: `jestExtendedMatcherMap`

Use `.toBeWithin` when checking if a `number` is in between the given bounds of:
start (inclusive) and end (exclusive).

```ts
import {
  defineExpect,
  not,
  test,
  toBeWithin,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBeWithin,
  },
  modifierMap: {
    not,
  },
});

test("passes when number is within given bounds", () => {
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});
```

## toBe

preset: `jestMatcherMap`

Use `.toBe` to compare primitive values.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be", () => {
  expect(0).toBe(0);
  expect(0).not.toBe(-0);
});
```

## toContainAnyEntries

preset: `jestExtendedMatcherMap`

Use `.toContainAnyEntries` when checking if an object contains at least one of
the provided entries.

```ts
import {
  defineExpect,
  not,
  test,
  toContainAnyEntries,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainAnyEntries,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains at least one of the given entries", () => {
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
```

## toContainAnyKeys

preset: `jestExtendedMatcherMap`

Use `.toContainAnyKeys` when checking if an object contains at least one of the
provided keys.

```ts
import {
  defineExpect,
  not,
  test,
  toContainAnyKeys,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainAnyKeys,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains at least one matching key", () => {
  const object = { a: "hello", b: "world" };
  expect(object).toContainAnyKeys(["a"]);
  expect(object).toContainAnyKeys(["b", "c"]);
  expect(object).not.toContainAnyKeys(["c"]);
});
```

## toContainAnyValues

preset: `jestExtendedMatcherMap`

Use `.toContainAnyValues` when checking if an object contains at least one of
the provided values.

```ts
import {
  defineExpect,
  not,
  test,
  toContainAnyValues,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainAnyValues,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains at least one of the given values", () => {
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainAnyValues(["qux", "foo"]);
  expect(object).toContainAnyValues(["qux", "baz"]);
  expect(object).not.toContainAnyValues(["qux"]);
});
```

## toContainEntries

preset: `jestExtendedMatcherMap`

Use `.toContainEntries` when checking if an object contains all of the provided
entries.

```ts
import {
  defineExpect,
  not,
  test,
  toContainEntries,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainEntries,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains all of the given entries", () => {
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
```

## toContainEntry

preset: `jestExtendedMatcherMap`

Use `.toContainEntry` when checking if an object contains the provided entry.

```ts
import {
  defineExpect,
  not,
  test,
  toContainEntry,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainEntry,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains given entry", () => {
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainEntry(["a", "foo"]);
  expect(object).toContainEntry(["c", "baz"]);
  expect(object).not.toContainEntry(["a", "qux"]);
});
```

## toContainEqual

preset: `jestMatcherMap`

Use `.toContainEqual` when you want to check that an item with a specific
structure and values is contained in an array.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when array contains given value", () => {
  expect({ a: "foo", b: "bar" }).toContainEqual({ a: "foo" });
  expect({ a: "foo", b: "bar" }).not.toContainEqual({ c: "hoo" });
});
```

## toContainKeys

preset: `jestExtendedMatcherMap`

Use `.toContainKeys` when checking if an object has all of the provided keys.

```ts
import {
  defineExpect,
  not,
  test,
  toContainKeys,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainKeys,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains all keys", () => {
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainKeys(["a", "b"]);
  expect(object).toContainKeys(["b", "c"]);
  expect(object).not.toContainKeys(["d"]);
});
```

## toContainValue

preset: `jestExtendedMatcherMap`

Use `.toContainValue` when checking if an object contains the provided value.

```ts
import {
  defineExpect,
  not,
  test,
  toContainValue,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainValue,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains given value", () => {
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainValue("foo");
  expect(object).toContainValue("bar");
  expect(object).not.toContainValue("qux");
});
```

## toContainValues

preset: `jestExtendedMatcherMap`

Use `.toContainValues` when checking if an object contains all of the provided
values.

```ts
import {
  defineExpect,
  not,
  test,
  toContainValues,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toContainValues,
  },
  modifierMap: {
    not,
  },
});

test("passes when object contains all of the given values", () => {
  const object = { a: "foo", b: "bar", c: "baz" };
  expect(object).toContainValues(["foo"]);
  expect(object).toContainValues(["baz", "bar"]);
  expect(object).not.toContainValues(["qux", "foo"]);
});
```

## toContain

preset: `jestMatcherMap`

Use `.toContain` when you want to check that an item is in an array.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when array contains given value", () => {
  expect([1, 2, 3, 4, 5]).toContain(3);
  expect([{}, [], ""]).not.toContain(3);
});
```

## toEndWith

preset: `jestExtendedMatcherMap`

Use `.toEndWith` when checking if a `string` ends with a given `string` suffix.

```ts
import {
  defineExpect,
  not,
  test,
  toEndWith,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toEndWith,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is ends with given string", () => {
  expect("hello world").toEndWith("world");
  expect("hello world").not.toEndWith("hello");
});
```

## toEqualCaseInsensitive

preset: `jestExtendedMatcherMap`

Use `.toEqualCaseInsensitive` when checking if a `string` is equal to another
ignoring the casing of both strings.

```ts
import {
  defineExpect,
  not,
  test,
  toEqualCaseInsensitive,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toEqualCaseInsensitive,
  },
  modifierMap: {
    not,
  },
});

test("passes when strings are equal ignoring case", () => {
  expect("hello world").toEqualCaseInsensitive("hello world");
  expect("hello world").toEqualCaseInsensitive("HELLO WORLD");
});
```

## toEqualIgnoringWhitespace

preset: `jestExtendedMatcherMap`

Use `.toEqualIgnoringWhitespace` when checking if a `string` is equal to another
`string` ignoring white-space.

```ts
import {
  defineExpect,
  not,
  test,
  toEqualIgnoringWhitespace,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toEqualIgnoringWhitespace,
  },
  modifierMap: {
    not,
  },
});

test("passes if strings are equal ignoring white-space", () => {
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
```

## toEqual

preset: `jestMatcherMap`

Use `.toEqual` to compare recursively all properties of object instances.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when array contains given value", () => {
  expect({}).toEqual({});
});
```

## toHaveBeenCalledAfter

preset: `jestExtendedMatcherMap`

Use `.toHaveBeenCalledAfter` when checking if a mock object was called after
another mock object.

```ts
import {
  defineExpect,
  fn,
  test,
  toHaveBeenCalledAfter,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toHaveBeenCalledAfter,
  },
});

test("calls mockObject1 after mockObject2", () => {
  const mockObject1 = fn();
  const mockObject2 = fn();

  mockObject2();
  mockObject1();
  mockObject2();

  expect(mockObject1).toHaveBeenCalledAfter(mockObject2);
});
```

## toHaveBeenCalledBefore

preset: `jestExtendedMatcherMap`

Use `.toHaveBeenCalledBefore` when checking if a mock object was called before
another mock object.

```ts
import {
  defineExpect,
  fn,
  test,
  toHaveBeenCalledBefore,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toHaveBeenCalledBefore,
  },
});

test("calls mockObject1 before mockObject2", () => {
  const mockObject1 = fn();
  const mockObject2 = fn();

  mockObject1();
  mockObject2();
  mockObject1();

  expect(mockObject1).toHaveBeenCalledBefore(mockObject2);
});
```

## toHaveBeenCalledOnce

preset: `jestExtendedMatcherMap`

Use `.toHaveBeenCalledOnce` to check if a mock object was called exactly one
time.

```ts
import {
  defineExpect,
  fn,
  not,
  test,
  toHaveBeenCalledOnce,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toHaveBeenCalledOnce,
  },
  modifierMap: {
    not,
  },
});

test("passes only if mock object was called exactly once", () => {
  const mockObject = fn();

  mockObject();
  expect(mockObject).toHaveBeenCalledOnce();
  mockObject();
  expect(mockObject).not.toHaveBeenCalledOnce();
});
```

## toHaveBeenCalledTimes

preset: `jestMatcherMap`

Use `.toHaveBeenCalledTimes` to ensure that a mock object got called exact
number of times.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object called 2 times", () => {
  const mockObject = fn();
  mockObject();
  mockObject();
  expect(mockObject).toHaveBeenCalledTimes(2);
});
```

## toHaveBeenCalledWith

preset: `jestMatcherMap`

Use `.toHaveBeenCalledWith` to ensure that a mock object was called with
specific arguments.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object called with arg", () => {
  const mockObject = fn();
  mockObject(1, 2, 3);
  expect(mockObject).toHaveBeenCalledWith(1, 2, 3);
});
```

## toHaveBeenCalled

preset: `jestMatcherMap`

Use `.toHaveBeenCalled` to ensure that a mock object got called.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object called", () => {
  const mockObject = fn();
  expect(mockObject).not.toHaveBeenCalled();
  mockObject();
  expect(mockObject).toHaveBeenCalled();
});
```

## toHaveBeenLastCalledWith

preset: `jestMatcherMap`

Use `.toHaveBeenLastCalledWith` to test mock object was last called with.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object of last called with", () => {
  const mockObject = fn();
  mockObject(1, 2, 3);
  mockObject(4, 5, 6);
  expect(mockObject).toHaveBeenLastCalledWith(4, 5, 6);
  expect(mockObject).not.toHaveBeenLastCalledWith(1, 2, 3);
});
```

## toHaveBeenNthCalledWith

preset: `jestMatcherMap`

Use `.toHaveBeenNthCalledWith` to test mock object was nth called with.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object of last called with", () => {
  const mockObject = fn();
  mockObject("tomato");
  mockObject("potato");
  expect(mockObject).toHaveBeenNthCalledWith(1, "tomato");
  expect(mockObject).toHaveBeenNthCalledWith(2, "potato");
});
```

## toHaveLastReturnedWith

preset: `jestMatcherMap`

Use `.toHaveLastReturnedWith` to test the specific value that a mock object last
returned.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object of last returned with", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);
  expect(mockObject).toHaveLastReturnedWith(7);
});
```

## toHaveLength

preset: `jestMatcherMap`

Use `.toHaveLength` to check that an object has a `.length` property and it is
set to a certain numeric value.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when object of length property equal to", () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect("abc").toHaveLength(3);
  expect("").not.toHaveLength(5);
});
```

## toHaveNthReturnedWith

preset: `jestMatcherMap`

Use `.toHaveNthReturnedWith` to test the specific value that a mock object
returned for the nth call.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object of last returned with", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);
  expect(mockObject).toHaveNthReturnedWith(1, 3);
  expect(mockObject).toHaveNthReturnedWith(2, 7);
});
```

## toHaveProperty

preset: `jestMatcherMap`

Use `.toHaveProperty` to check if property at provided reference keyPath exists
for an `object`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when check object property via keyPath", () => {
  expect({ a: "b" }).toHaveProperty("a");
  expect({ a: { b: { c: "d" } } }).toHaveProperty("a.b.c");
  expect({ a: { b: { c: "d" } } }).not.toHaveProperty(["a", "b", "c"], "e");
});
```

## toHaveReturnedTimes

preset: `jestMatcherMap`

Use `.toHaveReturnedTimes` to ensure that a mock object returned successfully an
exact number of times.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object returned successfully times", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);

  expect(mockObject).toHaveReturnedTimes(2);
});
```

## toHaveReturnedWith

preset: `jestMatcherMap`

Use `.toHaveReturnedWith` to ensure that a mock object returned a specific
value.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object returned specific value", () => {
  const mockObject = fn((a: number, b: number) => a + b);
  mockObject(1, 2);
  mockObject(3, 4);

  expect(mockObject).toHaveReturnedWith(7);
  expect(mockObject).toHaveReturnedWith(3);
});
```

## toHaveReturned

preset: `jestMatcherMap`

Use `.toHaveReturned` that the mock object successfully returned at least one
time.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when mock object returned at least once", () => {
  const mockObject = fn(() => true);
  expect(mockObject).not.toHaveReturned();
  mockObject();
  expect(mockObject).toHaveReturned();
});
```

## toIncludeAllMembers

preset: `jestExtendedMatcherMap`

Use `.toIncludeAllMembers` when checking if an `array` contains all of the same
members of a given set.

```ts
import {
  defineExpect,
  not,
  test,
  toIncludeAllMembers,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toIncludeAllMembers,
  },
  modifierMap: {
    not,
  },
});

test("passes when given array values match the members of the set", () => {
  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});
```

## toIncludeAnyMembers

preset: `jestExtendedMatcherMap`

Use `.toIncludeAnyMembers` when checking if an `array` contains any of the
members of a given set.

```ts
import {
  defineExpect,
  not,
  test,
  toIncludeAnyMembers,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toIncludeAnyMembers,
  },
  modifierMap: {
    not,
  },
});

test("passes when given array values match any of the members in the set", () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAnyMembers([2]);
  expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
});
```

## toIncludeMultiple

preset: `jestExtendedMatcherMap`

Use `.toIncludeMultiple` when checking if a `string` includes all of the given
substrings.

```ts
import {
  defineExpect,
  not,
  test,
  toIncludeMultiple,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toIncludeMultiple,
  },
  modifierMap: {
    not,
  },
});

test("passes when value includes all substrings", () => {
  expect("hello world").toIncludeMultiple(["world", "hello"]);
  expect("hello world").not.toIncludeMultiple(["world", "hello", "bob"]);
});
```

## toIncludeRepeated

preset: `jestExtendedMatcherMap`

Use `.toIncludeRepeated` when checking if a `string` includes the given `string`
substring the correct number of times.

```ts
import {
  defineExpect,
  not,
  test,
  toIncludeRepeated,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toIncludeRepeated,
  },
  modifierMap: {
    not,
  },
});

test("passes when value includes substring n times", () => {
  expect("hello hello world").toIncludeRepeated("hello", 2);
  expect("hello hello world").not.toIncludeRepeated("hello", 1);
});
```

## toIncludeSameMembers

preset: `jestExtendedMatcherMap`

Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in
any order.

```ts
import {
  defineExpect,
  not,
  test,
  toIncludeSameMembers,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toIncludeSameMembers,
  },
  modifierMap: {
    not,
  },
});

test("passes when arrays match in a different order", () => {
  expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
  expect([{ foo: "bar" }, { baz: "qux" }]).toIncludeSameMembers([
    { baz: "qux" },
    { foo: "bar" },
  ]);
});
```

## toInclude

preset: `jestExtendedMatcherMap`

Use `.toInclude` when checking if a `string` includes the given `string`
substring.

```ts
import {
  defineExpect,
  not,
  test,
  toInclude,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toInclude,
  },
  modifierMap: {
    not,
  },
});

test("passes when value includes substring", () => {
  expect("hello world").toInclude("ell");
  expect("hello world").not.toInclude("bob");
});
```

## toMatch

preset: `jestMatcherMap`

Use `.toMatch` to check that a `string` matches a regular expression.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when value match string or regExp", () => {
  expect("hello world").toMatch(/^hello/);
});
```

## toSatisfyAll

preset: `jestExtendedMatcherMap`

Use `.toSatisfyAll` when you want to use a custom matcher by supplying a
predicate function that returns a `boolean` for all values in an `array`.

```ts
import {
  defineExpect,
  not,
  test,
  toSatisfyAll,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toSatisfyAll,
  },
  modifierMap: {
    not,
  },
});

test("passes when all values in array pass given predicate", () => {
  const isOdd = (el: unknown) => typeof el === "number" && el % 2 === 1;
  expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
});
```

## toSatisfyAny

preset: `jestExtendedMatcherMap`

Use `.toSatisfyAny` when you want to use a custom matcher by supplying a
predicate function that returns `true` for any matching value in an `array`.

```ts
import {
  defineExpect,
  not,
  test,
  toSatisfyAny,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toSatisfyAny,
  },
  modifierMap: {
    not,
  },
});

test("passes when any value in array pass given predicate", () => {
  const isOdd = (el: unknown) => typeof el === "number" && el % 2 === 1;
  expect([2, 3, 6, 8]).toSatisfyAny(isOdd);
  expect([2, 4, 8, 12]).not.toSatisfyAny(isOdd);
});
```

## toSatisfy

preset: `jestExtendedMatcherMap`

Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate
function that returns a `boolean`.

```ts
import {
  defineExpect,
  not,
  test,
  toSatisfy,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toSatisfy,
  },
  modifierMap: {
    not,
  },
});

test("passes when value passes given predicate", () => {
  const greaterThanOneButNotThree = (n: unknown) =>
    typeof n === "number" && n > 1 && n !== 3;
  expect(100).toSatisfy(greaterThanOneButNotThree);
  expect(0).not.toSatisfy(greaterThanOneButNotThree);
  expect(3).not.toSatisfy(greaterThanOneButNotThree);
});
```

## toStartWith

preset: `jestExtendedMatcherMap`

Use `.toStartWith` when checking if a String starts with a given String prefix.

```ts
import {
  defineExpect,
  not,
  test,
  toStartWith,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toStartWith,
  },
  modifierMap: {
    not,
  },
});

test("passes when value is starts with given string", () => {
  expect("hello world").toStartWith("hello");
  expect("hello world").not.toStartWith("world");
});
```

## toThrow

preset: `jestMatcherMap`

Use `.toThrow` to test that a function throws when it is called.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when the function throw error", () => {
  expect(() => {
    throw Error("test");
  }).toThrow(/test/);
});
```
