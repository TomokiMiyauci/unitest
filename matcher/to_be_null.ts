// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isNull } from "../deps.ts";

/** Use `.toBeNull` when checking a value is `null`
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value is null", () => {
 *   expect(null).toBeNull();
 *   expect(undefined).not.toBeNull();
 * });
 * ```
 */
function toBeNull(actual: unknown): MatchResult {
  return {
    pass: isNull(actual),
    expected: null,
  };
}

export { toBeNull };
