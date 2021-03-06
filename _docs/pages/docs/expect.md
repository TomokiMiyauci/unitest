# expect

expect gives you access to a number of "matchers" that let you validate
different things.

```ts
import { expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";

expect("").toBe("");
```

## Custom matcher

It provides custom matcher interface.

You can add custom matcher easy. The type is automatically extended.

```ts
import {
  defineExpect,
  jestMatcherMap,
  not,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    toBe100: (actual: unknown) => {
      return {
        pass: actual === 100,
        expected: 100,
      };
    },
  },
  modifierMap: {
    not,
  },
});

expect(1000).not.toBe100();
```

### Power of TypeScript

Take full advantage of the power of TypeScript's type analysis.

In the example above, the actual `toBe100` takes no arguments. (It's not
variadic arguments.)

The matcher takes an `actual` value as its first argument. However, in the type
definition, the `actual` value is removed. This is accomplished by TypeScript.

Let's look at a more advanced example.

The type definition of a matcher `toBeGreaterThan` looks like this.

```ts
function toBeGreaterThan(
  actual: number | bigint,
  comparison: number | bigint,
) {}
```

`toBeGreaterThan` takes a `number` | `bigint` as `comparison`. Therefore, the
`actual` value should also be `number` | `bigint`. Because `jest` separated the
matcher implementation from its type definition, it was difficult to give
`actual` a type other than `any`.

In this project, we use all the power of TypeScript.

The type of `actual` will filter the available matchers.

For example, if `actual` has a value of type `string`, only matchers with a
first argument of a type compatible with `string` will be available.

```ts
import { expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";
expect("hello").toBeUndefined();
expect("world").toMatch(/hello/);

// This will result in a type error.
// expect('world').toBeGreaterThan(0)
```

```ts
import { expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";

expect(10).toBeUndefined();
expect(10).toBeGreaterThan(3);

// This will result in a type error.
// expect(10).toMatch("10")
```

This allows TypeScript to do some of the assertions for you.
