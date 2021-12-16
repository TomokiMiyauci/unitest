// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { withGlobal } from "https://cdn.skypack.dev/@sinonjs/fake-timers@8.1.0?dts";
import type { InstalledClock } from "https://cdn.skypack.dev/@sinonjs/fake-timers@8.1.0?dts";

/** Spec for fake timer object */
interface FakeTimerSpec {
  /** Replaces the standard timer function. It must be called in any test using
   * `useFakeTimer`
   */
  useRealTimer(): void;

  /** Exhausts both the macro-task queue and the micro-task queue.
   *  ```ts
   * import {
   *   expect,
   *   fn,
   *   test,
   *   useFakeTimer,
   * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should run all queued schedules", () => {
   *   const fakeTimer = useFakeTimer();
   *   const mockObject = fn();
   *   setTimeout(mockObject, 1000);
   *
   *   expect(mockObject).not.toHaveBeenCalled();
   *   fakeTimer.runAllTimers().useRealTimer();
   *   expect(mockObject).toHaveBeenCalled();
   * });
   * ```
   */
  runAllTimers(): FakeTimerSpec;
}

/** custom fake timer */
class FakeTimer implements FakeTimerSpec {
  private clock: InstalledClock;
  constructor(clock: InstalledClock) {
    this.clock = clock;
  }

  /** Exhausts both the macro-task queue and the micro-task queue. */
  runAllTimers(): this {
    this.clock.runAll();

    return this;
  }

  /** Replaces the standard timer function. It must be called in any test using
   * `useFakeTimer`.
   */
  useRealTimer(): void {
    this.clock.uninstall();
  }
}

/** Use fake versions of the standard timer functions. The `fakeTimer` object is the
 * return value. Contains a side effect of hijacking the globalThis timer.
 * ```ts
 * import {
 *   expect,
 *   test,
 *   useFakeTimer,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should hijack default globalThis timer functions", () => {
 *   expect(globalThis["setTimeout"]).toEqual(globalThis["setTimeout"]);
 *
 *   const setTimeout = globalThis["setTimeout"];
 *   const fakeTimer = useFakeTimer();
 *
 *   expect(globalThis["setTimeout"]).not.toEqual(setTimeout);
 *
 *   fakeTimer.useRealTimer();
 * });
 * ```
 */
function useFakeTimer(): FakeTimer {
  const fakeTimer = withGlobal(globalThis);
  const clock = fakeTimer.install();

  return new FakeTimer(clock);
}

export { FakeTimer, useFakeTimer };
