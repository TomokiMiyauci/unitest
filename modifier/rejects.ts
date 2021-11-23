// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PreModifier } from "./types.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { stringify } from "../helper/format.ts";

const rejects: PreModifier = {
  type: "pre",
  fn: async ({ actual }) => {
    if (!isPromise(actual)) {
      throw new AssertionError("expected value must be a Promise");
    }

    const resolvedActual = await actual.then(() => {
      throw new AssertionError(
        `Promise did not reject. resolved to ${stringify(actual)}`,
      );
    }).catch((v) => v as unknown);

    return {
      actual: resolvedActual,
    };
  },
};

export { rejects };
