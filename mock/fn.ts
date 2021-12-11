// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Mock } from "./mock.ts";
import type { MockObject } from "./mock.ts";

/** make mock object */
function fn<T extends unknown[]>(
  implementation: (...args: T) => unknown,
): MockObject<T>;
function fn(): MockObject;
function fn(implementation?: (...args: unknown[]) => unknown): MockObject {
  const mock = new Mock();

  const call = (...args: unknown[]): void => {
    const timestamp = Date.now();
    const value = implementation?.(...args);
    mock.add({
      args,
      result: {
        type: "return",
        value,
      },
      timestamp,
    });
  };

  Object.defineProperty(call, "mock", {
    get() {
      const { results, calls, invocationTimestamps } = mock;
      return { results, calls, invocationTimestamps };
    },
  });

  return call as MockObject;
}

export { fn };
export type { MockObject };
