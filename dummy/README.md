# dummy

dummy provides dummy object. The dummy object is the only specially processed
object in the `equal` function.

The dummy object can be used to perform asymmetric matching.

## anything

`anything()` matches anything but `null` or `undefined`.

```ts
import {
  anything,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should not be null or undefined", () => {
  expect("").toEqual(anything());
  expect(null).not.toEqual(anything());
  expect(undefined).not.toEqual(anything());
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

### condition

`anyString` accept condition function. You can put conditions on the
equivalence.

```ts
import {
  anyString,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const isUpper = (value: string): boolean => /^[A-Z]+$/.test(value);

test("should be upperCase string", () => {
  expect("HELLO").toEqual(anyString(isUpper));
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

### condition

`anyNumber` accept condition function. You can put conditions on the
equivalence.

```ts
import {
  anyNumber,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";
import { isEven } from "https://deno.land/x/isx/mod.ts";

test("should be even", () => {
  expect(2).toEqual(anyNumber(isEven));
});
```

## anyBitInt

`anyNumber()` matches any `bigint` or `BigInt`.

```ts
import {
  anyBigInt,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";
test("should be any bigint", () => {
  expect(1n).toEqual(anyBigInt());
});
```

## anyBoolean

`anyBoolean()` matches any `boolean` or `Boolean`

```ts
import {
  anyBoolean,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any boolean", () => {
  expect(new Boolean(false)).toEqual(anyBoolean());
});
```

## anySymbol

`anyBoolean()` matches any `symbol` or `Symbol`

```ts
import {
  anySymbol,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";
test("should be any symbol", () => {
  expect(Symbol.for("symbol")).toEqual(anySymbol());
});
```

## anyFunction

`anyFunction()` matches any `function`.

```ts
import {
  anyFunction,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any function", () => {
  expect(() => {}).toEqual(anyFunction());
});
```

## anyArray

`anyArray(?unknown)` matches any `array` or any specific `array`

```ts
import {
  anyArray,
  anyString,
  expect,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be any array", () => {
  expect({ students: ["Alice", "Bob", "John"] }).toEqual({
    students: anyArray(),
  });
});

test("should be any string array", () => {
  expect({ students: ["Alice", "Bob", "John"] }).toEqual({
    students: anyArray(anyString()),
  });
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
