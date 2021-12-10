// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import type { MatchResult } from "./types.ts";
import type { AnyFn } from "../_types.ts";
import { isError, isUndefined } from "../deps.ts";

/** predict for `toThrow` */
function predict(actual: AnyFn) {
  let hasError = false;
  let e = undefined;

  try {
    actual();
  } catch (_e) {
    hasError = true;
    e = _e;
  }

  return {
    hasError,
    e,
  };
}

/** Use `.toThrow` to test that a function throws when it is called
 * ```ts
 * import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
 *
 * test("passes when the function throw error", () => {
 *   expect(() => {
 *     throw Error("test");
 *   }).toThrow(/test/);
 * });
 * ```
 */
function toThrow(actual: AnyFn, expected?: string | RegExp): MatchResult {
  const { hasError, e } = predict(actual);

  const pass = hasError &&
    ((isUndefined(expected)) || (isError(e) && !!e.message.match(expected)) ||
      e === expected);

  return {
    pass,
    expected,
  };
}

export { predict, toThrow };
