// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { blue } from "../deps.ts";
import type {
  PostModifier,
  PostModifierContext,
  PostModifierResult,
} from "./types.ts";

/** predict for `predict` */
function predict(
  { pass, expectedHint }: PostModifierContext,
): PostModifierResult {
  return {
    pass: !pass,
    expectedHint: `${expectedHint} ${blue("[not]")}`,
  };
}

/** Use `.not` to reverse the test result
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when not equal to", () => {
 *   expect("Deno").not.toBe("Node");
 * });
 * ```
 */
const not = {
  type: "post",
  fn: predict,
} as PostModifier;

export { not, predict };
