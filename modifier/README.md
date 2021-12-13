# modifier

The modifier can hijack the values passed to the matcher and the results of the
matcher.

## not

type: `post`

Use `.not` to reverse the test result.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when not equal to", () => {
  expect("Deno").not.toBe("Node");
});
```

## resolves

type: `pre`

Use `.resolves` to resolve `Promise` before match.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when resolved value equal to", async () => {
  await expect(Promise.resolve("Deno")).resolves.toBe("Deno");
});
```

## rejects

type: `pre`

Use `.rejects` to reject `Promise` before match.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("passes when rejected value equal to", async () => {
  await expect(Promise.reject("Deno") as Promise<string>).rejects.toBe("Deno");
});
```

`Promise.reject` is of type `Promise<never>` by default.

The matcher filter is performed on the `never` type.
