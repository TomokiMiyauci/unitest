// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, printHint, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";
import type { AnyFn } from "@/_types.ts";
import { isError, isUndefined } from "@/deps.ts";

function predict(actual: AnyFn) {
  let hasError = false;
  let e;

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

function toThrow(actual: AnyFn, expected?: string | RegExp): MatchResult {
  const { hasError, e } = predict(actual);

  if (hasError) {
    if (isUndefined(expected)) return success();

    if (isError(e) && e.message.match(expected)) return success();

    if (e === expected) return success();
  }

  return fail({
    message: printHint({
      actual,
      expected,
      matcherArgs: [expected],
      matcher: "toThrow",
    }),
  });
}

export { predict, toThrow };
