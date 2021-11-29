# test

Register a test which will be run and the containing module looks like a test
module. fn can be async if required.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should not be the same",
  fn: () => {
    expect("Deno").not.toBe("Node");
  },
});
```

## setup/teardown

`test` can accept `setup` and `teardown` property.

setup can be used to define a mock or to set up a specific instance.

The variables returned by setup are passed as arguments to `fn`. You can access
these variables in tests.

teardown is a hook that is called after the test has finished. The argument to
teardown is the return value of setup, which can be used to perform various
cleanups.

```ts
test({
  name: "should request actual",
  setup: () => {
    const myClass = new MyClass();
    myClass.init();

    return {
      myClass,
    };
  },

  fn: ({ myClass }) => {
    myClass.do(); // test it
  },

  teardown: ({ myClass }) => {
    myClass.reset();
  },
});
```

## each

We can now do table-driven tests with jest's `test.each`, and unitest has a
similar interface.

`test.each(table)(name, fn)`.

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

function double(value: number): number {
  return value * 2;
}

test.each([[1, 2], [100, 200]])(
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
