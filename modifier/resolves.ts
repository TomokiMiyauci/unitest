// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PreModifier } from "./types.ts";
import { AssertionError, isPromise } from "../deps.ts";

const resolves: PreModifier = {
  type: "pre",
  fn: async ({ actual }) => {
    if (!isPromise(actual)) {
      throw new AssertionError("expected value must be a Promise");
    }

    const resolvedActual = await actual;

    return {
      actual: resolvedActual,
    };
  },
};

export { resolves };
