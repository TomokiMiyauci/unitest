# fake

fake provides fake object. The fake object is the only specially processed
object in the `equal` function.

The fake object can be used to perform asymmetric matching.

## anything

`anything()` matches anything but `null` or `undefined`.

```ts
import {
  anything,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should not be null or undefined", () => {
  expect(actual).toEqual(anything());
});
```

## any

`any(constructor)` matches anything that was created with the given constructor.

```ts
import { any, expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any number", () => {
  expect(Infinity).toEqual(any(Number));
});
```

## arrayContaining

`arrayContaining(array)` matches a received array which contains all of the
elements in the expected array.

```ts
import {
  arrayContaining,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any number", () => {
  expect(["Alice", "Bob", "Eve"]).toEqual(arrayContaining(["Eve", "Bob"]));
});
```

## objectContaining

`objectContaining(object)` matches any received object that recursively matches
the expected properties

```ts
import {
  any,
  expect,
  objectContaining,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any number", () => {
  expect({
    name: "Bob",
    score: 100,
  }).toEqual({
    name: any(String),
    score: any(Number),
  });
});
```

## stringMatching

`stringMatching(string | RegExp)` matches `string` or regular expression

```ts
import {
  any,
  expect,
  stringMatching,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be match pattern", () => {
  expect("hello! This is a good day.").toEqual(stringMatching(/good/));
});
```

## stringContaining

`stringMatching(string)` matches if `string` contains

```ts
import {
  any,
  expect,
  stringMatching,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should contain pattern", () => {
  expect("hello! This is a good day.").toEqual(stringMatching("good"));
});
```

## anyString

`anyString()` matches any `string` or `String`

```ts
import {
  anyString,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any string", () => {
  expect("hello").toEqual(anyString());
});
```

## anyNumber

`anyNumber()` matches any `number` or `Number`

```ts
import {
  anyNumber,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any number", () => {
  expect(Infinity).toEqual(anyNumber());
});
```

## anyOf

`anyOf(array)` matches any of expected value

```ts
import {
  anyOf,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any of 1, 2, 3", () => {
  expect(3).toEqual(anyOf([1, 2, 3]));
});
```
