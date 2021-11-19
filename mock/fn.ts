// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { Mock } from "@mock/types.ts";

/**
 * Make mock
 * @returns Mock object
 *
 * @beta
 */
function fn(): Mock {
  const calls: unknown[][] = [];

  const self = new Proxy(new Function(), {
    apply: (_, __, args) => {
      calls.push(args);
    },

    get: (_, props) => {
      if (props === "mock") {
        return {
          calls,
        };
      }
    },
  });

  return self as Mock;
}

export { fn };
