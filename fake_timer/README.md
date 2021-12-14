# fake timer

Replaces the native timer function with a function that allows you to control
the passage of time.

## useFakeTimer

Use fake versions of the standard timer functions. The `fakeTimer` object is the
return value. Contains a side effect of hijacking the globalThis timer.

```ts
import {
  expect,
  test,
  useFakeTimer,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should hijack default globalThis timer functions", () => {
  expect(globalThis["setTimeout"]).toEqual(globalThis["setTimeout"]);

  const setTimeout = globalThis["setTimeout"];
  const fakeTimer = useFakeTimer();

  expect(globalThis["setTimeout"]).not.toEqual(setTimeout);

  fakeTimer.useRealTimer();
});
```

### fakeTimer#useRealTimer

Replaces the standard timer function. It must be called in any test using
`useFakeTimer`.

## fakeTimer#runAllTimers

Exhausts both the macro-task queue and the micro-task queue.

```ts
import {
  expect,
  fn,
  test,
  useFakeTimer,
} from "https://deno.land/x/unitest@$VERSION/mod.ts";

test("should run all queued schedules", () => {
  const fakeTimer = useFakeTimer();
  const mockObject = fn();
  setTimeout(mockObject, 1000);

  expect(mockObject).not.toHaveBeenCalled();
  fakeTimer.runAllTimers().useRealTimer();
  expect(mockObject).toHaveBeenCalled();
});
```
