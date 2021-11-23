---
title: Get Started
authors:
  - miyauci
---

# Get Started

Welcome to use **Unitest**!

## Installation

you will need [Deno](https://deno.land/#installation) **1.14+**

Registry: <https://deno.land/x/unitest@VERSION>

## Usage

### expect

`expect` is a ready-to-use configuration with a jest build-in matcher.

`expect(actual)[modifier][matcher]`

```ts
import { expect } from "https://deno.land/x/unitest@VERSION/mod.ts";

Deno.test({
  name: "test it!",
  fn: () => {
    expect("test").not.toBe("it!");
  },
});
```

### it

Same as follow:

```ts
import { expect, it } from "https://deno.land/x/unitest@VERSION/mod.ts";

it("test it", () => {
  expect("test").not.toBe("it!");
});
```

### defineExpect

`defineExpect` defines an `expect`. By using only the matchers you want to use,
you can greatly reduce the bundle size.

```ts
import {
  defineExpect,
  toEqual,
} from "https://deno.land/x/unitest@VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toEqual,

    toBe100: (actual: number) => {
      return {
        pass: actual === 100,
        expected: 100,
      };
    },
  },
});

it("should equal", () => {
  expect({}).toEqual({});
});

it("should be 100", () => {
  expect(100).toBe100();
});
```

### preset

`matcher` や `modifier` のプリセットを提供しています。`jest` や`jest-extended` のマッチャーが存在します。

```ts
import {
  defineExpect,
  it,
  jestExtendedMatherMap,
  jestMatcherMap,
} from "https://deno.land/x/unitest@VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    ...jestExtendedMatcherMap,
  },
});

it("should be one of list", () => {
  expect(1), toBeOneOf([0, 1, 2]);
});
```
