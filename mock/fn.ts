// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Mock, MockCall } from "./types.ts";

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
function fn<T, Y extends unknown[]>(implementation?: (...args: Y) => T): Mock {
  const calls: MockCall["calls"] = [];
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
