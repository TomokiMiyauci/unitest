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
import { spyOn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

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
