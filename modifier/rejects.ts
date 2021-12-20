// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { AssertionError } from "../deps.ts";
import { stringify } from "../helper/format.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

/** predict for `rejects` */
async function predict(
  actual: Promise<unknown>,
): Promise<PreModifierResult<unknown>> {
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
const rejects: PreModifier<Promise<unknown>, Promise<{ actual: unknown }>> = {
  type: "pre",
  fn: predict,
};

export { predict, rejects };
