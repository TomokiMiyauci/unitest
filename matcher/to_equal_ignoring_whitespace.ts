// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";
import { predict } from "./to_be.ts";

/** remove white-space */
function noWhiteSpace(value: string): string {
  return value.replaceAll(/\s/g, "");
}

/** Use `.toEqualIgnoringWhitespace` when checking if a `string` is equal to another
 * `string` ignoring white-space.
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toEqualIgnoringWhitespace,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toEqualIgnoringWhitespace,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes if strings are equal ignoring white-space", () => {
 *   expect("SELECT * FROM TABLE WHERE CONDITION").toEqualIgnoringWhitespace(`
 *         SELECT * FROM TABLE
 *         WHERE CONDITION
 *     `);
 *   expect(".class { cssRule: value }").not.toEqualIgnoringWhitespace(`
 *         #id {
 *             cssRule: value
 *         }
 *     `);
 * });
 * ```
 */
function toEqualIgnoringWhitespace(
  actual: string,
  expected: string,
): MatchResult {
  const HINT = "except white-space";
  const resultActual = noWhiteSpace(actual);
  const _expected = noWhiteSpace(expected);

  return {
    pass: predict(resultActual, _expected),
    expected: _expected,
    resultActual,
    expectedHint: `Expected ${HINT}:`,
    actualHint: `Actual ${HINT}:`,
  };
}

export { noWhiteSpace, toEqualIgnoringWhitespace };
