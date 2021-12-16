// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, fn, test, useFakeTimer } from "../mod.ts";
test("should hijack default globalThis timer functions", () => {
  expect(globalThis["setTimeout"]).toEqual(globalThis["setTimeout"]);

  const setTimeout = globalThis["setTimeout"];
  const fakeTimer = useFakeTimer();

  expect(globalThis["setTimeout"]).not.toEqual(setTimeout);

  fakeTimer.useRealTimer();
});

test("should run all queued schedules", () => {
  const fakeTimer = useFakeTimer();
  const mockObject = fn();
  setTimeout(mockObject, 1000);

  expect(mockObject).not.toHaveBeenCalled();
  fakeTimer.runAllTimers().useRealTimer();
  expect(mockObject).toHaveBeenCalled();
});
