// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { isUndefined } from "../deps.ts";

/** Use `.toBeDefined` to check that a variable is not undefined
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("there is a new flavor idea", () => {
 *   expect("defined").toBeDefined();
 *   expect(undefined).not.toBeDefined();
 * });
 * ```
 */
function toBeDefined(actual: unknown): MatchResult {
  return {
    pass: !isUndefined(actual),
    expected: "All except undefined",
  };
}

export { toBeDefined };
