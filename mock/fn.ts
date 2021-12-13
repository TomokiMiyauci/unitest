// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Mock } from "./mock.ts";
import { incrementalNumber } from "./utils.ts";
import type { MockObject } from "./mock.ts";

/** make mock object */
function fn<A extends unknown[], R>(
  implementation: (...args: A) => R,
): MockObject<A, R>;
function fn(): MockObject;
function fn(
  implementation?: (...args: unknown[]) => unknown,
): MockObject {
  const mock = new Mock();

  const call = (...args: unknown[]): unknown => {
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

  Object.defineProperty(call, "mock", {
    get() {
      const { results, calls, callOrderNumbers } = mock;
      return { results, calls, callOrderNumbers };
    },
  });

  return call as MockObject;
}

export { fn };
export type { MockObject };
