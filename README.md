<div align="center">
  <h1>Unitest</h1>

[![test](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml/badge.svg?branch=beta)](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/unitest)
[![deno version](https://img.shields.io/badge/deno-^1.14.0-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/unitest/mod.ts)
[![codecov](https://codecov.io/gh/TomokiMiyauci/unitest/branch/main/graph/badge.svg?token=nQZ8Nnx3KH)](https://codecov.io/gh/TomokiMiyauci/unitest)

Deno-first **uni**versal **unit** testing framework

</div>

---

:construction: This is beta

## expect

```ts
import { expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";

expect("").toBe("");
```

### Custom matcher

It provides custom matcher interface.

You can add custom matcher easy. The type is automatically extended.

```ts
import { defineExpect, jestMatcherMap } from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  ...jestMatcherMap
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

- [ ] Implement expecter and jest default matcher (rest)
  - toHaveProperty
  - toContainEqual
  - toMatchObject
  - toMatchSnapshot
  - toMatchInlineSnapshot
  - toStrictEqual
  - toThrowErrorMatchingSnapshot
  - toThrowErrorMatchingInlineSnapshot
- [ ] Implement third party matcher (rest)
  - jest-extended
    - toBeEmpty
    - ~~toBeArrayOfSize~~ toHaveLength
    - toIncludeAllMembers
    - toIncludeAllPartialMembers
    - toIncludeAnyMembers
    - toIncludeSameMembers
    - toSatisfyAll
    - toSatisfyAny
    - toThrowWithMessage
    - toHaveBeenCalledBefore
    - toHaveBeenCalledAfter
    - toHaveBeenCalledOnce
    - ~~toBeNaN~~ exists in jest
    - toContainKey
    - toContainKeys
    - toContainAllKeys
    - toContainAnyKeys
    - toContainValue
    - toContainValues
    - toContainAllValues
    - toContainAnyValues
    - toContainEntry
    - toContainEntries
    - toContainAllEntries
    - toContainAnyEntries
    - toBeExtensible
    - toBeFrozen
    - toBeSealed
    - ~~toResolve~~ not pure
    - ~~toReject~~ not pure
    - toBeHexadecimal
    - toBeDateString
    - toEqualCaseInsensitive
    - toStartWith
    - toEndWith
    - toInclude
    - toIncludeRepeated
    - toIncludeMultiple
    - toEqualIgnoringWhitespace
- [x] Implement interface of custom matcher
- [ ] Implement `it` suite
- [ ] Implement `describe` suite

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
