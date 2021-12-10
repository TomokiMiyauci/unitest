// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { fn } from "../mod.ts";
import { isFunction } from "../deps.ts";
import type { MockObject } from "./mock.ts";

/** tracks calls to object method name
 * This function has a side effect.
 * ```ts
 * import { spyOn, test, expect } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const video = {
 *   play() {
 *     return true;
 *   },
 * };
 *
 * test("plays video", () => {
 *   const spy = spyOn(video, "play");
 *   const isPlaying = video.play();
 *
 *   expect(spy).toHaveBeenCalled();
 *   expect(isPlaying).toBe(true);
 * });
 * ```
 */
function spyOn<T extends object>(object: T, key: keyof T): MockObject<any> {
  const descriptor = Object.getOwnPropertyDescriptor(object, key);

  if (!descriptor) return fn();

  const _isFunction = isFunction(descriptor.value);
  const mock = _isFunction ? fn(descriptor.value) : fn();
  const callableValue = (...args: unknown[]) => {
    mock(...args);
    return (descriptor.value as Function)(...args);
  };
  const value = _isFunction ? callableValue : descriptor.value;

  Object.defineProperty(object, key, {
    ...descriptor,
    value,
  });

  return mock;
}

export { spyOn };
