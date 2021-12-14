# mock object

Mock object are also known as "spies", because they let you spy on the behavior
of a function that is called indirectly by some other code, rather than only
testing the output.

## fn(?implementation)

Returns a new, unused mock object. Optionally takes a mock implementation.

```ts
import { fn } from "https://deno.land/x/unitest@$VERSION/mod.ts";

const mockObject = fn();
const implementedMockObject = fn((a: number, b: number) => a + b);
```

## spyOn(object, methodName)

Make a mock object similar to `fn` but also tracks calls to object[methodName].
This function has a side effect.

```ts
import {
  expect,
  spyOn,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

const video = {
  play() {
    return true;
  },
};

test("plays video", () => {
  const spy = spyOn(video, "play");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
```

## isMockObject

Whatever argument is `MockObject` or not.

```ts
import {
  expect,
  fn,
  isMockObject,
  test,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should be mock object", () => {
  const mockObject = fn();
  expect(isMockObject(mockObject)).toBeTruthy();
  expect(isMockObject({})).toBeFalsy();
});
```

## mockObject.mock.calls

An array containing the call arguments of all calls that have been made to this
mock function. Each item in the array is an array of arguments that were passed
during the call.

```ts
import { fn } from "https://deno.land/x/unitest@$VERSION/mod.ts";

const mockObject = fn();
mockObject.mock.calls; // []
mockObject("arg1", "arg2");
mockObject.mock.calls; // [['arg1', 'arg2']]
mockObject("arg3", "arg4");
mockObject.mock.calls; // [['arg1', 'arg2'], ['arg3', 'arg4']]
```

## mockObject.mock.results

An array containing the results of all calls that have been made to mock object.
Each entry in this array is an object containing a type property, and a value
property. type will be one of the following:

- `return` - Indicates that the call completed by returning normally.

```ts
import { fn } from "https://deno.land/x/unitest@$VERSION/mod.ts";

const mockObject = fn((value: unknown) => value);
mockObject.mock.results; // []
mockObject("value1");
mockObject.mock.results; // [{ type: "return", value: "value1" }]
mockObject("value2");
mockObject.mock.calls; // [{ type: "return", value: "value1" }, { type: "return"}, value: "value2" ]
```

## mockObject#defaultImplementation

Sets the mock function as default. The set function will be called when the mock
object is called.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define implementation as default", () => {
  const mockObject = fn().defaultImplementation(() => true);
  expect(mockObject()).toBe(true);
});
```

This is known as `jest.fn().mockImplementation`.

## mockObject#onceImplementation

Sets a mock function to be called only once. This takes precedence over the
default mock function. If there is more than one once implementation, they will
be called in the order of registration.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define implementation as only once", () => {
  const mockObject = fn(() => 0).onceImplementation(() => 1);
  expect(mockObject()).toBe(1);
  expect(mockObject()).toBe(0);
});
```

This is known as `jest.fn().mockImplementationOnce`.

## mockObject#defaultReturnValue

Sets default as return value. The set value will be return when the mock object
is called.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define return value as default", () => {
  const mockObject = fn(() => 1).defaultReturnValue(0);
  expect(mockObject()).toBe(0);
});
```

This is known as `jest.fn().mockReturnValue`.

## mockObject#onceReturnValue

Sets a mock function what return specific value to be called only once. This
takes precedence over the default mock function. Follow the FIFO.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define return value as only once", () => {
  const mockObject = fn(() => 1).onceReturnValue(0);
  expect(mockObject()).toBe(0);
  expect(mockObject()).toBe(1);
});
```

This is known as `jest.fn().mockReturnValueOnce`.

## mockObject#defaultResolvedValue

Sets default as resolved value. The set value will be Promised and return when
the mock object is called.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define resolved value as default", () => {
  const mockObject = fn().defaultResolvedValue(1);
  expect(mockObject()).toEqual(Promise.resolve(1));
});
```

This is known as `jest.fn().mockResolvedValue`.

## mockObject#onceResolvedValue

Sets a mock function what return specific `Promise` value to be called only
once. This takes precedence over the default mock function. Follow the FIFO.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define resolved value as only once", () => {
  const mockObject = fn().onceResolvedValue(2).defaultReturnValue(1);
  expect(mockObject()).toEqual(Promise.resolve(2));
  expect(mockObject()).toBe(1);
});
```

This is known as `jest.fn().mockResolvedValueOnce`.

## mockObject#defaultRejectedValue

Sets default as rejected value. The set value will be Promised and return when
the mock object is called.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define rejected value as default", () => {
  const mockObject = fn().defaultRejectedValue(Error("error"));
  expect(mockObject()).rejects.toEqual(Error("error"));
});
```

This is known as `jest.fn().mockRejectedValue`.

## mockObject#onceRejectedValue

Sets a mock function what return specific `Promise.reject` value to be called
only once. This takes precedence over the default mock function. Follow the
FIFO.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should define rejected value as only once", async () => {
  const mockObject = fn().onceRejectedValue(Error("test"));
  await expect(mockObject()).rejects.toEqual(Error("test"));
  expect(mockObject()).not.toBeDefined();
});
```

This is known as `jest.fn().mockRejectedValueOnce`.

## mockObject#mockClear

Resets stored in the `mockObject.mock`. Often this is useful when you want to
clean up a mocks usage data between two assertions.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should clear mock", () => {
  const mockObject = fn(() => 1);
  mockObject();

  expect(mockObject).toHaveReturnedWith(1);
  mockObject.mockClear();
  expect(mockObject).not.toHaveReturnedWith(1);
});
```

## mockObject#reset

Resets stored in the `mockObject.mock` and also removes any mocked return values
or implementations. This is useful when you want to completely reset a mock back
to its initial state.

```ts
import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should clear mock and all registered once implementations and default", () => {
  const mockObject = fn(() => 1);
  mockObject();

  expect(mockObject).toHaveReturnedWith(1);

  mockObject.reset();
  expect(mockObject).not.toHaveBeenCalled();

  mockObject();
  expect(mockObject).toHaveReturnedWith(undefined);
});
```

This is known as `jest.fn().mockReset`.
