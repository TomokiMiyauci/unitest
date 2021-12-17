// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isObject } from "../deps.ts";
import { prop } from "../matcher/utils.ts";
import { Mock } from "./mock.ts";
import type { MockSpec } from "./mock.ts";
import { incrementalNumber, Queue } from "./utils.ts";

interface MockObject<A extends readonly unknown[] = any[], R = unknown> {
  (...args: A): R;
  mock: Pick<MockSpec, "calls" | "results" | "callOrderNumbers">;

  /** Sets the mock function as default. The set function will be called when the mock
   * object is called.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define implementation as default", () => {
   *   const mockObject = fn().defaultImplementation(() => true);
   *   expect(mockObject()).toBe(true);
   * });
   * ```
   */
  defaultImplementation(
    implementation: (...args: A) => R,
  ): MockObject<A, R>;

  /** Sets default as return value. The set value will be return when the mock object
   * is called.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define return value as default", () => {
   *   const mockObject = fn(() => 1).defaultReturnValue(0);
   *   expect(mockObject()).toBe(0);
   * });
   * ```
   */
  defaultReturnValue(value: R): MockObject<A, R>;

  /** Sets default as resolved value. The set value will be Promised and return when
   * the mock object is called.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define resolved value as default", () => {
   *   const mockObject = fn().defaultResolvedValue(1);
   *   expect(mockObject()).toEqual(Promise.resolve(1));
   * });
   * ```
   */
  defaultResolvedValue(value: R): MockObject<A, Promise<R>>;

  /** Sets default as rejected value. The set value will be Promised and return when
   * the mock object is called.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define rejected value as default", () => {
   *   const mockObject = fn().defaultRejectedValue(Error("error"));
   *   expect(mockObject() as Promise<never>).rejects.toEqual(Error("error"));
   * });
   * ```
   */
  defaultRejectedValue(value: R): MockObject<A, Promise<R>>;

  /** Sets a mock function to be called only once. This takes precedence over the
   * default mock function. If there is more than one once implementation, they will
   * be called in the order of registration.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define implementation as only once", () => {
   *   const mockObject = fn(() => 0).onceImplementation(() => 1);
   *   expect(mockObject()).toBe(1);
   *   expect(mockObject()).toBe(0);
   * });
   * ```
   */
  onceImplementation(
    implementation: (...args: A) => R,
  ): MockObject<A, R>;

  /** Sets a mock function what return specific value to be called only once. This
   * takes precedence over the default mock function. Follow the FIFO.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define return value as only once", () => {
   *   const mockObject = fn(() => 1).onceReturnValue(0);
   *   expect(mockObject()).toBe(0);
   *   expect(mockObject()).toBe(1);
   * });
   * ```
   */
  onceReturnValue(value: R): MockObject<A, R>;

  /** Sets a mock function what return specific `Promise` value to be called only
   * once. This takes precedence over the default mock function. Follow the FIFO.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define resolved value as only once", () => {
   *   const mockObject = fn().onceResolvedValue(2).defaultReturnValue(1);
   *   expect(mockObject()).toEqual(Promise.resolve(2));
   *   expect(mockObject()).toBe(1);
   * });
   * ```
   */
  onceResolvedValue(value: R): MockObject<A, unknown>;

  /** Sets a mock function what return specific `Promise.reject` value to be called
   * only once. This takes precedence over the default mock function. Follow the
   * FIFO.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should define rejected value as only once", async () => {
   *   const mockObject = fn().onceRejectedValue(Error("test"));
   *   await expect(mockObject() as Promise<never>).rejects.toEqual(Error("test"));
   *   expect(mockObject()).not.toBeDefined();
   * });
   * ```
   */
  onceRejectedValue(value: R): MockObject<A, unknown>;

  /** Resets stored in the `mockObject.mock`. Often this is useful when you want to
   * clean up a mocks usage data between two assertions.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should clear mock", () => {
   *   const mockObject = fn(() => 1);
   *   mockObject();
   *
   *   expect(mockObject).toHaveReturnedWith(1);
   *   mockObject.mockClear();
   *   expect(mockObject).not.toHaveReturnedWith(1);
   * });
   * ```
   */
  mockClear(): MockObject<A, R>;

  /** Resets stored in the `mockObject.mock` and also removes any mocked return values
   * or implementations. This is useful when you want to completely reset a mock back
   * to its initial state.
   * ```ts
   * import { expect, fn, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
   *
   * test("should clear mock and all registered once implementations and default", () => {
   *   const mockObject = fn(() => 1);
   *   mockObject();
   *
   *   expect(mockObject).toHaveReturnedWith(1);
   *
   *   mockObject.reset();
   *   expect(mockObject).not.toHaveBeenCalled();
   *
   *   mockObject();
   *   expect(mockObject).toHaveReturnedWith(undefined);
   * });
   * ```
   */
  reset(): MockObject<A, R>;
}

/** make mock object with implementation function */
function fn<A extends readonly unknown[], R>(
  implementation: (...args: A) => R,
): MockObject<A, R>;
/** make mock object */
function fn(): MockObject;
function fn(
  implementation?: (...args: unknown[]) => unknown,
): MockObject {
  const mock = new Mock();
  const onceStore = new Queue<((...args: unknown[]) => unknown)>();

  let _defaultImplementation: ((...args: unknown[]) => unknown) | undefined =
    implementation;

  /** Calls a method of an object, substituting another object for the current object.  */
  const call = (...args: unknown[]): unknown => {
    const implementation = onceStore.dequeue() ?? _defaultImplementation;
    const value = implementation?.(...args);
    mock.add({
      args,
      result: {
        type: "return",
        value,
      },
      orderNumber: incrementalNumber(),
    });
    return value;
  };

  /** Sets the mock function as default. The set function will be called when the mock object is called.  */
  const defaultImplementation = (
    implementation: (...args: unknown[]) => unknown,
  ): void => {
    _defaultImplementation = implementation;
  };

  /** Sets a mock function to be called only once.
   * This takes precedence over the default mock function.
   * If there is more than one once implementation, they will be called in the order of registration.
   */
  const onceImplementation = (
    implementation: (...args: unknown[]) => unknown,
  ): void => {
    onceStore.enqueue(implementation);
  };

  /** Sets a mock function what return specific value to be called only once.
   * This takes precedence over the default mock function.
   * Follow the FIFO.
   */
  const onceReturnValue = (value: unknown): void => {
    onceStore.enqueue(() => value);
  };

  /** Sets default as return value. The set value will be return when the mock object is called.
   */
  const defaultReturnValue = (value: unknown): void => {
    _defaultImplementation = () => value;
  };

  /** Sets default as resolved value.
   * The set value will be Promised and return when the mock object is called.
   */
  const defaultResolvedValue = (value: unknown): void => {
    _defaultImplementation = () => Promise.resolve(value);
  };

  /** Sets a mock function what return specific `Promise` value to be called only
   * once. This takes precedence over the default mock function. Follow the FIFO.
   */
  const onceResolvedValue = (value: unknown): void => {
    onceStore.enqueue(() => Promise.resolve(value));
  };

  /** Sets default as rejected value. The set value will be Promised and return when
   * the mock object is called.
   */
  const defaultRejectedValue = (value: unknown): void => {
    _defaultImplementation = () => Promise.reject(value);
  };

  /** Sets a mock function what return specific `Promise.reject` value to be called
   * only once. This takes precedence over the default mock function. Follow the
   * FIFO.
   */
  const onceRejectedValue = (value: unknown): void => {
    onceStore.enqueue(() => Promise.reject(value));
  };

  /** Resets stored in the `mockObject.mock`. Often this is useful when you want to
   * clean up a mocks usage data between two assertions.
   */
  const mockClear = (): void => {
    mock.clear();
  };

  /** Resets stored in the `mockObject.mock` and also removes any mocked return values
   * or implementations. This is useful when you want to completely reset a mock back
   * to its initial state.
   */
  const reset = (): void => {
    mock.clear();
    _defaultImplementation = undefined;
    onceStore.clear();
  };

  // rename display name
  Object.defineProperty(call, "name", {
    get: () => "Mock Object",
  });

  Object.defineProperty(call, "mock", {
    get() {
      const { results, calls, callOrderNumbers } = mock;
      return { results, calls, callOrderNumbers };
    },
  });

  const properties = Object.entries({
    defaultImplementation,
    defaultReturnValue,
    defaultResolvedValue,
    defaultRejectedValue,
    onceImplementation,
    onceReturnValue,
    onceResolvedValue,
    onceRejectedValue,
    mockClear,
    reset,
  }).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        value: (v: any) => {
          value(v);
          return call;
        },
      },
    }),
    {} as PropertyDescriptorMap,
  );

  Object.defineProperties(call, properties);

  return call as MockObject;
}

/** Whatever argument is `MockObject` or not.
 * ```ts
 * import {
 *   expect,
 *   fn,
 *   isMockObject,
 *   test,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be mock object", () => {
 *   const mockObject = fn();
 *   expect(isMockObject(mockObject)).toBeTruthy();
 *   expect(isMockObject({})).toBeFalsy();
 * });
 * ```
 */
function isMockObject<A extends readonly unknown[] = any[], R = unknown>(
  value: object,
): value is MockObject<A, R> {
  const mock = prop("mock", value);
  if (!isObject(mock)) return false;

  return ["results", "calls", "callOrderNumbers"].every((key) =>
    Array.isArray(prop(key, mock))
  );
}

export { fn, isMockObject };
export type { MockObject };
