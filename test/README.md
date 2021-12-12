# test

Register a test which will be run and the containing module looks like a test
module. `fn` can be async if required.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should not be the same",
  fn: () => {
    expect("Deno").not.toBe("Node");
  },
});
```

or jest like:

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("jest like test", () => {
  expect("unitest").not.toBe("jest");
});
```

## setupMap

types: `Record<PropertyKey, () => SetupReturn>`

`test` can accept `setupMap` property.

`setupMap` can define setup and return an object. Certain fields affect the test
environment.

```ts
import {
  defineGlobalThis,
  expect,
  fn,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should request actual",
  setupMap: {
    fetch: () => {
      const mockObject = fn();
      const reset = defineGlobalThis(
        "fetch",
        (input, init) => {
          mockObject(input, init);
          return Promise.resolve(new Response("test"));
        },
      );
      return {
        localThis: { mockObject },
        teardown: reset,
      };
    },
  },

  fn: async ({ fetch: { mockObject } }) => {
    await fetch("https://unitest.verce.app/");

    expect(mockObject).toHaveBeenCalledWith(
      "https://unitest.verce.app/",
      undefined,
    );
  },
});
```

As setup is a pure function, it can be defined externally to make it more
modular.

### localThis

types: `Record<PropertyKey, object>`

Variables passed to `localThis` in the setup can be referenced by the `fn`
function. This was inspired by the naming of `globalThis`.

TypeScript will automatically type-extend the field specified in `localThis`.

### teardown

types: `() => void | Promise<void>`

teardown is a hook that is called after the test has finished.

## each

We can now do table-driven tests with jest's `test.each`, and unitest has a
similar interface.

types: `each(table)(name, fn)`.

```ts
import { each, expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";

function double(value: number): number {
  return value * 2;
}

each([[1, 2], [100, 200]])(
  "double(%d) => %d",
  (actual, expected) => expect(double(actual)).toBe(expected),
);
```

The `name` is the title of the test block. You can use the `printf` formatting.

A type specifier that can be any of:

- `%` - yields a literal % character
- `b` - yields an integer as a binary number
- `c` - yields an integer as the character with that ASCII value
- `d` or i - yields an integer as a signed decimal number
- `e` - yields a float using scientific notation
- `u` - yields an integer as an unsigned decimal number
- `f` - yields a float as is; see notes on precision above
- `g` - yields a float as is; see notes on precision above
- `o` - yields an integer as an octal number
- `s` - yields a string as is
- `t` - yields true or false
- `T` - yields the type of the argument1
- `v` - yields the primitive value of the specified argument
- `x` - yields an integer as a hexadecimal number (lower-case)
- `X` - yields an integer as a hexadecimal number (upper-case)
- `j` - yields a JavaScript object or array as a JSON encoded string

Currently, we use [sprintf.js](https://github.com/alexei/sprintf.js) for
`printf` formatting. Note that this is subject to change in the future.
