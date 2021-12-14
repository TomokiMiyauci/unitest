// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { FakeTimer, useFakeTimer } from "./fake_timer.ts";
import { withGlobal } from "http://esm.sh/@sinonjs/fake-timers";
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
