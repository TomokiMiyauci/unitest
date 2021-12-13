// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Mock } from "./mock.ts";
import { incrementalNumber } from "./utils.ts";
import { head } from "../matcher/utils.ts";
import type { MockObject } from "./mock.ts";

/** make mock object */
function fn<A extends readonly unknown[], R>(
  implementation: (...args: A) => R,
): MockObject<A, R>;
function fn(): MockObject;
function fn(
  implementation?: (...args: unknown[]) => unknown,
): MockObject {
  const mock = new Mock();
  let implementations:
    ({ implementation: (...args: unknown[]) => unknown } & IsDefault)[] =
      implementation ? [{ isDefault: true, implementation }] : [];

  /** Calls a method of an object, substituting another object for the current object.  */
  const call = (...args: unknown[]): unknown => {
    const value = head(implementations)?.implementation?.(...args);
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

  const setImplementation = (
    implementation: (...args: unknown[]) => unknown,
  ): MockObject => {
    implementations = [{ implementation, isDefault: true }];
    return call as MockObject;
  };

  Object.defineProperty(call, "mock", {
    get() {
      const { results, calls, callOrderNumbers } = mock;
      return { results, calls, callOrderNumbers };
    },
  });

  Object.defineProperty(call, "setImplementation", {
    value: setImplementation,
  });

  return call as MockObject;
}

export { fn };
export type { MockObject };

type IsDefault = {
  isDefault: boolean;
};
