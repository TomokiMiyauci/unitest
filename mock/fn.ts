// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { Mock, MockCall } from "./types.ts";
import type { Writable } from "../_types.ts";

/**
 * Make mock
 * @returns Mock object
 *
 * @beta
 */
function fn(): Mock;
function fn<T, Y extends unknown[]>(
  implementation: (...args: Y) => T,
): Mock<T, Y>;
function fn<T, Y extends unknown[]>(
  implementation?: (...args: Y) => T,
): Mock {
  const calls: Writable<MockCall["calls"]> = [];
  const results: MockCall["results"] = [];

  const self = new Proxy(new Function(), {
    apply: (_, __, args) => {
      const value = implementation?.(...args as Y);
      calls.push(args);

      results.push({
        type: "return",
        value,
      });
    },

    get: (_, props) => {
      if (props === "mock") {
        return {
          calls,
          results,
        };
      }
    },
  });

  return self as Mock;
}

export { fn };
