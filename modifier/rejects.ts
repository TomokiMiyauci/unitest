// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type {
  PreModifier,
  PreModifierContext,
  PreModifierResult,
} from "./types.ts";
import { AssertionError, isPromise } from "../deps.ts";
import { stringify } from "../helper/format.ts";

/** predict for `rejects` */
async function predict(
  { actual }: PreModifierContext,
): Promise<PreModifierResult> | never {
  if (!isPromise(actual)) {
    throw new AssertionError("expected value must be a Promise");
  }

  const resolvedActual = await actual.then((v) => [false, v] as const).catch((
    v,
  ) => [true, v as unknown] as const);

  if (!resolvedActual[0]) {
    throw new AssertionError(
      `Promise did not reject. resolved to ${stringify(resolvedActual[1])}`,
    );
  }

  return {
    actual: resolvedActual[1],
  };
}

/** Use `.resolves` to resolve `Promise` before match
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when rejected value equal to", async () => {
 *   await expect(Promise.reject("Deno") as Promise<string>).rejects.toBe("Deno");
 * });
 * ```
 */
const rejects: PreModifier = {
  type: "pre",
  fn: predict,
};

export { predict, rejects };
