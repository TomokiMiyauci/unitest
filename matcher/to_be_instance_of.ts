// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

/** Use `.toBeInstanceOf` to check that an object is an instance of a class
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when value is instance of class", () => {
 *   class A {}
 *   expect(new A()).toBeInstanceOf(A);
 *   expect(() => {}).toBeInstanceOf(Function);
 *   expect(new A()).not.toBeInstanceOf(Function);
 * });
 * ```
 */
function toBeInstanceOf(actual: unknown, expected: Function): MatchResult {
  return {
    pass: actual instanceof expected,
    expectedHint: "Expected to be instance of:",
    expected,
  };
}

export { toBeInstanceOf };
