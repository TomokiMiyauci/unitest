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
