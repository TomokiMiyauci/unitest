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
  fn: (actual: unknown, context: PreModifierContext) => { actual: unknown };
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

## rejects

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
