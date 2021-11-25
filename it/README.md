# it

`it` is a closure that handles `expect`, and works like the syntax for jest.

```ts
import { expect, it } from "https://deno.land/x/unitest@$VERSION/mod.ts";

it("should not be the same", () => {
  expect("Deno").not.toBe("Node");
});
```

This is equivalent to the follow:

```ts
Deno.test("should be not the same", () => {
  expect("Deno").not.toBe("Node");
});
```

## each

We can now do table-driven tests with jest's `it.each`, and unitest has a
similar interface.

`it.each(table)(name, fn)`.

```ts
import { expect, it } from "https://deno.land/x/unitest@$VERSION/mod.ts";

function double(value: number): number {
  return value * 2;
}

it.each([[1, 2], [100, 200]])(
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
