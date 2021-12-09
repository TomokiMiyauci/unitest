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
