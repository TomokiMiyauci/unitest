// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { PreModifierContext, PreModifierResult } from "./types.ts";
import { AssertionError, isPromise } from "../deps.ts";

async function resolves(
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

export { resolves };
