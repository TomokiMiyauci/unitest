# Unitest

[![test](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml/badge.svg?branch=beta)](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/unitest)
[![deno version](https://img.shields.io/badge/deno-^1.14.0-lightgrey?logo=deno)](https://github.com/denoland/deno)

Deno-first **uni**versal **unit** testing framework

jest like testing easy

:construction: This is still beta

## expect

```ts
import { expect } from "https://deno.land/x/unitest@{VERSION}/mod.ts";

expect("").toBe("");
```

### Custom matcher

It provides custom matcher interface.

You can add custom matcher easy. The type is automatically extended.

```ts
import { defineExpect, jestMatcher } from "https://deno.land/x/unitest@{VERSION}/mod.ts";

const expect = defineExpect({
  ...jestMatcher
  toBe100: (actual) => {
    if (actual === 100) return { pass: true };
    return {
      pass: false,
      message,
    };
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
expect("hello").toBeUndefined();
expect("world").toMatch(/hello/);

// This will result in a type error.
// expect('world').toBeGreaterThan(0)
```

```ts
expect(10).toBeUndefined();
expect(10).toBeGreaterThan(3);

// This will result in a type error.
// expect(10).toMatch("10")
```

This allows TypeScript to do some of the assertions for you.

## TODO

- [ ] Implement expecter and jest default matcher
  - [x] toBe
  - [x] toBeDefined
  - [x] toBeFalsy
  - [x] toBeInstanceOf
  - [x] toBeNaN
  - [x] toBeNull
  - [x] toBeTruthy
  - [x] toBeUndefined
  - [x] toEqual
  - [x] toHaveLength
  - [x] toBeGreaterThan
  - [x] toBeGreaterThanOrEqual
  - [x] toBeLessThan
  - [x] toBeLessThanOrEqual
  - [x] toBeCloseTo
  - [x] toHaveBeenCalled
  - [x] toHaveBeenCalledTimes
  - [x] toHaveBeenCalledWith
  - [x] toHaveBeenLastCalledWith
  - [x] toHaveBeenNthCalledWith
  - [x] toHaveReturned
  - [x] toHaveReturnedTimes
  - [ ] toHaveReturnedWith
  - [ ] toHaveLastReturnedWith
  - [ ] toHaveNthReturnedWith
  - [ ] toHaveProperty
  - [x] toContain
  - [ ] toContainEqual
  - [x] toMatch
  - [ ] toMatchObject
  - [ ] toMatchSnapshot
  - [ ] toMatchInlineSnapshot
  - [ ] toStrictEqual
  - [x] toThrow
  - [ ] toThrowErrorMatchingSnapshot
  - [ ] toThrowErrorMatchingInlineSnapshot
- [ ] Implement interface of custom matcher
- [ ] Implement `it` suite
- [ ] Implement `describe` suite
