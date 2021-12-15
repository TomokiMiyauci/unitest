// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isUndefined } from "../deps.ts";
import type { MatchResult } from "./types.ts";

/** Whatever argument is `Error` extended object or not */
function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/** Use `.toBeError` when checking if a value is `Error` object or `Error` extended
 * object.
 * ```ts
 * import {
 *   defineExpect,
 *   not,
 *   test,
 *   toBeError,
 * } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * const expect = defineExpect({
 *   matcherMap: {
 *     toBeError,
 *   },
 *   modifierMap: {
 *     not,
 *   },
 * });
 *
 * test("passes when given an error", () => {
 *   expect(Error()).toBeError();
 *   expect({}).not.toBeError();
 *   expect(TypeError()).toBeError(TypeError);
 *   expect(TypeError()).not.toBeError(Error);
 *   expect(TypeError("test with unitest")).toBeError(TypeError, "unitest");
 * });
 * ```
 */
function toBeError(
  actual: unknown,
  ErrorClass?: new (...args: any[]) => Error,
  messageIncludes?: string,
): MatchResult {
  const _isError = isError(actual);
  if (!_isError || !ErrorClass) {
    return {
      pass: _isError,
      expected: "Error object",
    };
  }

  if (isUndefined(messageIncludes)) {
    const msg = "error name:";
    return {
      actual: actual.name,
      actualHint: `Actual ${msg}`,
      pass: actual.name === ErrorClass.name,
      expected: ErrorClass.name,
      expectedHint: `Expected ${msg}`,
    };
  }

  return {
    pass: actual.message.includes(messageIncludes),
    actual: actual.message,
    actualHint: "Actual error message:",
    expected: messageIncludes,
    expectedHint: "Expected to includes:",
  };
}

export { isError, toBeError };
