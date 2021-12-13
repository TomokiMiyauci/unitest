// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type {
  PreModifier,
  PreModifierContext,
  PreModifierResult,
} from "./types.ts";
import { AssertionError, isPromise } from "../deps.ts";

/** predict for `resolves` */
async function predict(
  { actual }: PreModifierContext,
): Promise<PreModifierResult> {
  if (!isPromise(actual)) {
    throw new AssertionError("expected value must be a Promise");
  }

  const resolvedActual = await actual;

  return {
    actual: resolvedActual,
  };
}

/** pre modifier for resolve `Promise` */
const resolves: PreModifier = {
  type: "pre",
  fn: predict,
};

export { predict, resolves };
