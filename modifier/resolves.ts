// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { magenta } from "../deps.ts";
import type { PreModifier, PreModifierResult } from "./types.ts";

/** predict for `resolves` */
async function predict(
  actual: Promise<unknown>,
): Promise<PreModifierResult<unknown>> {
  const resolvedActual = await actual;

  return {
    actual: resolvedActual,
    reserveActualHint: (actualHint) => `${actualHint} ${magenta("[resolved]")}`,
  };
}

/** Use `.resolves` to resolve `Promise` before match
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when resolved value equal to", async () => {
 *   await expect(Promise.resolve("Deno")).resolves.toBe("Deno");
 * });
 * ```
 */
const resolves: PreModifier<
  Promise<unknown>,
  Promise<PreModifierResult<unknown>>
> = {
  type: "pre",
  fn: predict,
};

export { predict, resolves };
