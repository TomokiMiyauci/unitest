// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { FakeTimer, useFakeTimer } from "./fake_timer.ts";
import { withGlobal } from "https://cdn.skypack.dev/@sinonjs/fake-timers@8.1.0?dts";
import { fn } from "../mock/fn.ts";

import { assertEquals, assertExists } from "../dev_deps.ts";

Deno.test("useFakeTimer", () => {
  const fakeTimer = useFakeTimer();

  assertExists(fakeTimer);

  fakeTimer.useRealTimer();
});

Deno.test("runAllTimer", () => {
  const mockObject = fn();
  const clock = withGlobal(globalThis).install();
  const fakeTimer = new FakeTimer(clock);
  setTimeout(mockObject, 1000);

  assertEquals(mockObject.mock.calls.length, 0);

  fakeTimer.runAllTimers();
  assertEquals(mockObject.mock.calls.length, 1);

  fakeTimer.useRealTimer();
});
