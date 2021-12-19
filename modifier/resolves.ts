// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

/** predict for `resolves` */
async function predict(
  actual: Promise<unknown>,
): Promise<{ actual: unknown }> {
  const resolvedActual = await actual;

  return {
    actual: resolvedActual,
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
const resolves = {
  type: "pre" as const,
  fn: predict,
};

export { predict, resolves };
