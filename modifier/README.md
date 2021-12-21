# modifier

The modifier can hijack the values passed to the matcher and the results of the
matcher.

In jest, modifiers are built into the `expect` implementation, so they cannot be
extended or removed.

In unitest `expect` is fully configurable and modifiers can be added or removed
at will. TypeScript will then perform type inference and present the available
modifiers.

## what is modifier

A modifier inject that is used before and after the matcher. There are currently
two types of modifiers.

The syntax of `expect` with the modifier is as follows:

`expect(actual)[?[pre|post]modifier][matcher](expected)`

## pre modifier

Pre modifier is an object that is executed before a match. It interrupts the
value passed to the matcher and can change its value.

It has the following interface:

```ts
import type { PreModifierContext } from "https://deno.land/x/unitest@$VERSION/modifier/types.ts";

type PreModifier = {
  type: "pre";
  fn: (
    actual: unknown,
    context: PreModifierContext,
  ) => { actual: unknown } | Promise<{ actual: unknown }>;
};
```

The first argument is `actual`, which is received by the `expect` function. The
second argument is the context in `expect`, such as the matcher itself or the
arguments passed to the matcher.

Also, pre modifier is currently the only one that is allowed to perform
asynchronous processing in the context of `expect`.

Typical pre modifiers are `resolves` and `rejects`.

### resolves

Use `.resolves` to resolve `Promise` before match.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when resolved value equal to", async () => {
  await expect(Promise.resolve("Deno")).resolves.toBe("Deno");
});
```

`resolves` does asynchronous processing, so `await` is required.

### rejects

Use `.rejects` to reject `Promise` before match.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when rejected value equal to", async () => {
  await expect(Promise.reject("Deno") as Promise<string>).rejects.toBe("Deno");
});
```

`rejects` does asynchronous processing, so `await` is required.

`Promise.reject` is of type `Promise<never>` by default.

The matcher filter is performed on the `never` type.

### trim

Use `.trim` to removes the leading and trailing white space and line terminator
characters from a `actual`.

```ts
import {
  defineExpect,
  test,
  toBe,
  trim,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBe,
  },
  modifierMap: {
    trim,
  },
});

test("passes when trimmed string to be", () => {
  expect("  hello world  ").trim.toBe("hello world");
});
```

### string

Use `.string` to convert any `actual` to `string`. Internally, the `String`
constructor is used.

```ts
import {
  defineExpect,
  string,
  test,
  toBe,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBe,
  },
  modifierMap: {
    string,
  },
});

test("passes when stringified value to be", () => {
  expect(null).string.toBe("null");
});
```

### number

Use `.number` to convert any `actual` to `number`. Internally, the `Number`
constructor is used.

```ts
import {
  defineExpect,
  number,
  test,
  toBe,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBe,
  },
  modifierMap: {
    number,
  },
});

test("passes when numberized value to be", () => {
  expect("").number.toBe(0);
  expect("test").number.toBe(NaN);
});
```

### boolean

Use `.boolean` to convert any `actual` to `boolean`. Internally, the `Boolean`
constructor is used.

```ts
import {
  boolean,
  defineExpect,
  test,
  toBe,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const expect = defineExpect({
  matcherMap: {
    toBe,
  },
  modifierMap: {
    boolean,
  },
});

test("passes when booleanized value to be", () => {
  expect("").boolean.toBe(false);
  expect("test").boolean.toBe(true);
});
```

## post modifier

Post modifier is an object that is executed after a match. It interrupts the
result of match and can change its value.

It has the following interface:

```ts
import type {
  PostModifierContext,
  PostModifierResult,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

type PostModifier = {
  type: "post";
  fn: (context: PostModifierContext) => PostModifierResult;
};
```

It is expected to be used to reverse the result of a match like `not`, or to
output debug information.

### not

Use `.not` to reverse the test result.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when not equal to", () => {
  expect("Deno").not.toBe("Node");
});
```

### debug

Use `.debug` to output debug info to console with `console.debug`.

```ts
import {
  debug,
  defineExpect,
  jestExtendedMatcherMap,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should output debug info", () => {
  const expect = defineExpect({
    matcherMap: jestExtendedMatcherMap,
    modifierMap: {
      debug,
    },
  });
  expect("Deno").debug.toBeString();

  // Output to console:
  // DEBUG { Context }
});
```
