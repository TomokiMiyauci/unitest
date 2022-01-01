---
title: Get Started
authors:
  - miyauci
---

# Get Started

Welcome to **Unitest**!

## Requirements

The following requirements must need:

- Deno 1.15+.

## Module Registry

unitest is hosted in several registries.

You can choose the registry of your choice.

- deno.land: <https://deno.land/x/unitest>
- nest.land: <https://x.nest.land/unitest>

Note that this document shows an example of using the `deno.land` module. So,
the import path should look like this:

`https://deno.land/x/unitest@$VERSION`.

It is recommended that you specify the latest version possible for `$VERSION`.

## Basic usage

Let's write a test using a simple example, testing a function that adds two
numbers.

Create an `add.ts` file.

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

Then, create the `add_test.ts` file.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
import { add } from ". /add.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
```

Deno recommends that the test file and the file under test be placed flat.

```bash
.
├── add.ts
└── add_test.ts
```

The `test` function registers a test. Besides the `jest` style, it can also be
written like Deno's Runtime API.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
import { add } from "./add.ts";

test({
  name: "adds 1 + 2 to equal 3"
  fn: () => {
    expect(sum(1, 2)).toBe(3);
  }
})
```

Finally, if you run `deno test`, it will print the following message:

```bash
running 1 test from file:///path/to/add_test.ts
test adds 1 + 2 to equal 3 ... ok (9ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (42ms)
```

You used unitest to write your first test, and it worked!

This test uses `expect` and `toBe` to test if two values are the same.

The `expect` tests the actual value (`actual`) and the expected value
(`expected`) with the following syntax.

`expect(actual)[matcher](expected)`.

`toBe` is equivalent to `matcher`.

For all available `matchers`, see [matcher](./matcher.md) for all available
`matchers`.
