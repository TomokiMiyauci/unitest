// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Mock } from "./mock.ts";
import type { MockSpec } from "./mock.ts";
import { incrementalNumber } from "./utils.ts";

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
  defaultReturnValue(value: R): MockObject<A, R>;
  defaultResolvedValue(value: R): MockObject<A, Promise<R>>;
  onceImplementation(
    implementation: (...args: A) => R,
  ): MockObject<A, R>;
  onceReturnValue(value: R): MockObject<A, R>;
}

/** store fn internal implementation */
class MockFnStore {
  private onceImplementations: ((...args: unknown[]) => unknown)[] = [];
  constructor(
    private defaultImplementation?: ((...args: unknown[]) => unknown),
  ) {}

  pickImplementation(): ((...args: unknown[]) => unknown) | undefined {
    return this.onceImplementations.shift() ?? this.defaultImplementation;
  }
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
  const mockFnStore = new MockFnStore(implementation);

  /** Calls a method of an object, substituting another object for the current object.  */
  const call = (...args: unknown[]): unknown => {
    const implementation = mockFnStore.pickImplementation();
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
  ): MockObject => {
    mockFnStore["defaultImplementation"] = implementation;
    return call as MockObject;
  };

  /** Sets a mock function to be called only once.
   * This takes precedence over the default mock function.
   * If there is more than one once implementation, they will be called in the order of registration.
   */
  const onceImplementation = (
    implementation: (...args: unknown[]) => unknown,
  ): MockObject => {
    mockFnStore["onceImplementations"].push(implementation);
    return call as MockObject;
  };

  /** Sets a mock function what return specific value to be called only once.
   * This takes precedence over the default mock function.
   * Follow the FIFO.
   */
  const onceReturnValue = (value: unknown): MockObject => {
    mockFnStore["onceImplementations"].push(() => value);
    return call as MockObject;
  };

  /** Sets default as return value. The set value will be return when the mock object is called.
   */
  const defaultReturnValue = (value: unknown): MockObject => {
    mockFnStore["defaultImplementation"] = () => value;
    return call as MockObject;
  };

  /** Sets default as resolved value.
   * The set value will be Promised and return when the mock object is called.
   */
  const defaultResolvedValue = (value: unknown): MockObject => {
    mockFnStore["defaultImplementation"] = () => Promise.resolve(value);
    return call as MockObject;
  };

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
    onceImplementation,
    onceReturnValue,
  }).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        value,
      },
    }),
    {} as PropertyDescriptorMap,
  );

  Object.defineProperties(call, properties);

  return call as MockObject;
}

export { fn, MockFnStore };
export type { MockObject };
