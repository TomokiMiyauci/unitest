// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isUndefined } from "../deps.ts";

/** Use `.toBeUndefined` to check that a value is `undefined`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("should be truthy", () => {
 *   expect(undefined).toBeUndefined();
 *   expect(null).not.toBeUndefined();
 * });
 * ```
 */
function toBeUndefined(actual: unknown): MatchResult {
  return {
    pass: isUndefined(actual),
    expected: undefined,
  };
}

export { toBeUndefined };
