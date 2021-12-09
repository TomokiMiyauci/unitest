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

## TODO

- [ ] Implement expecter and jest default matcher (rest)
  - toMatchObject
  - toMatchSnapshot
  - toMatchInlineSnapshot
  - toStrictEqual
  - toThrowErrorMatchingSnapshot
  - toThrowErrorMatchingInlineSnapshot
- [ ] Implement third party matcher (rest)
  - jest-extended
    - ~~toBeArrayOfSize~~ toHaveLength
    - toIncludeAllPartialMembers
    - toThrowWithMessage
    - toHaveBeenCalledBefore
    - toHaveBeenCalledAfter
    - toHaveBeenCalledOnce
    - ~~toBeNaN~~ exists in jest
    - ~~toContainKey~~ same as toHaveProperty
    - toContainAllKeys
    - toContainAllValues
    - toContainAllEntries
    - ~~toResolve~~ not pure
    - ~~toReject~~ not pure
    - ~~toBeHexadecimal~~ -> toBeHexColor
