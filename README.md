# Unitest

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
  - [ ] toBeCloseTo
  - [ ] toHaveBeenCalled
  - [ ] toHaveBeenCalled
  - [ ] toHaveBeenCalledTimes
  - [ ] toHaveBeenCalledWith
  - [ ] toHaveBeenLastCalledWith
  - [ ] toHaveBeenNthCalledWith
  - [ ] toHaveReturned
  - [ ] toHaveReturnedTimes
  - [ ] toHaveReturnedWith
  - [ ] toHaveLastReturnedWith
  - [ ] toHaveNthReturnedWith
  - [ ] toHaveProperty
  - [ ] toContain
  - [ ] toContainEqual
  - [x] toMatch
  - [ ] toMatchObject
  - [ ] toMatchSnapshot
  - [ ] toMatchInlineSnapshot
  - [ ] toStrictEqual
  - [ ] toThrow
  - [ ] toThrowErrorMatchingSnapshot
  - [ ] toThrowErrorMatchingInlineSnapshot
- [ ] Implement interface of custom matcher
- [ ] Implement `it` suite
- [ ] Implement `describe` suite
